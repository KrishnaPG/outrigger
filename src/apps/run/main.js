import url from 'fast-url-parser';

import ReactDOM from 'react-dom';
import React from 'react';

import Juttle from 'juttle-client-library';
import * as api from '../../client-lib/utils/api';
import RendezvousSocket from '../../client-lib/utils/rendezvous-socket';

import JuttleViewer from './components/juttle-viewer';

import 'juttle-client-library/dist/juttle-client-library.css';
import '../sass/main.scss';

// construct client plus views and inputs
let outriggerHost = window.location.host;
let client = new Juttle(outriggerHost);
let view = new client.View(document.getElementById("juttle-view-layout"));
let inputs = new client.Input(document.getElementById("juttle-input-groups"));
let juttleSourceEl = document.getElementById("juttle-source");

let currentBundle;
let parsed = url.parse(window.location.href, true);

let initBundle = (bundle) => {
    ReactDOM.render(<JuttleViewer juttleSource={bundle.program} />, juttleSourceEl);
    currentBundle = bundle;
    client.describe(bundle)
    .then((desc) => {

        // if we have no inputs go ahead and run
        if (desc.inputs.length === 0) {
            view.run(bundle);
        } else {
            inputs.render(bundle);
        }
    });
};

if (parsed.query.path) {
    api.getBundle(parsed.query.path)
    .then(res => initBundle(res.bundle));
} else if (parsed.query.rendezvous) {
    let rendezvousUrl = `ws://${outriggerHost}/rendezvous/${parsed.query.rendezvous}`
    let rendezvous = new RendezvousSocket(rendezvousUrl);

    rendezvous.on('message', msg => initBundle(msg.bundle));
}

// run btn click
document.getElementById("btn-run").addEventListener("click", () => {
    view.run(currentBundle, inputs.getValues());
});
