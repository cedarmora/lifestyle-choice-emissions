# Lifestyle Choice Emissions

How do the lifestyle choices that we make affect the environment?
Some actions have a huge impact, while others don't do too much.
We can approximate this effect by the amount of carbon dioxide
equivalents that each choice makes, and through this we can design
different lifestyles, and compare their environmental impact.

For example, if you are a single person who lives in the suburbs,
how much effect on climate change would moving close enough to bike
have?

Or if you're part of a family of four, what effect would having
another child have?

If you've got the travel bug, how does flying to a far off location
compare to a more local trip?

# Technologies
Built in Python, Flask, Docker, and React (through Webpack and Babel)

# How to Run It
First install docker and docker-compose using the setup.sh script.
```
chmod +x setup.sh
./setup.sh
```

Then:

## Development
To run in development environment do:
```
docker-compose up
```
By default this includes configuration from  `docker-compose.yml` and `docker-compose.override.yml`

## Production
To run in production do:
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```

Optionally add `--build` argument to the commands above to automatically rebuild images when changes happen.

Ctrl-C to stop