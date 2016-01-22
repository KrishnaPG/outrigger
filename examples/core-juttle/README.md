# Examples for core juttle capabilities.

## Setup

These examples use only built-in Juttle processors and adapters.  All
you need to run these examples is to install outrigger and run
outriggerd, as described in the parent directory.

## Additional docker-compose configuration

None needed.

## ``juttle-config.json`` configuration

None needed.

## Juttle Programs

To run any of these program, just visit
``http://(localhost|docker machine ip):8080/run?path=/examples/core-juttle/index.juttle``
and follow the links.

### Hello World!

This basic Juttle program uses the artificial data source `emit` to produce a single
data point with current timestamp and message field with value 'hello world'.

View this program: [hello_world.juttle](./hello_world.juttle)

### Sine Wave

Juttle programs can be parameterized with user inputs, such as this math program
that renders a sine wave function on a timechart with the amplitude and period
set by the user in the input control boxes.

View this program: [sine_wave.juttle](./sine_wave.juttle)

For another example of a program with input, see [fizzbuzz.juttle](fizzbuzz.juttle).

### Stock Prices

This program uses the http adapter to read raw stock price and dividend data from
Yahoo! Finance (for a stock named by the user via a text input box),
renders a timechart of daily closing prices over a background of daily trading volume,
and shows dividend payouts (if any) as events overlaid on the same chart.

View this program: [stock_prices.juttle](./stock_prices.juttle)

### Kitchen Duty

This fun and useful little program helps us keep the office kitchen clean by
randomly selecting two team members every day to serve on kitchen duty.
The program sends a notification to our #food slack channel to alert the chosen ones
(the http sink is commented out, edit with proper target to see it in action).

View this program: [kitchen_duty.juttle](./kitchen_duty.juttle)

### Chart Gallery

Juttle works with juttle-viz library to produce visualizations, including the
table and timechart used in previous examples, and [more](http://juttle.github.io/juttle-viz/).

This program showcases different charts (XXX/need to finish! Only tile shown right now).

View this program: [chart_gallery.juttle](./chart_gallery.juttle)

### NPM Download Counts

This program shows a timechart of [npm](https://www.npmjs.com/)
download counts for a given npm package. The npm package is
configurable via an input control.

View this program: [npm_download_counts.juttle](./npm_download_counts.juttle)


