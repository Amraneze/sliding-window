# Sliding Window Module

[![GitHub Release](https://img.shields.io/github/package-json/v/amraneze/sliding-window/master?style=flat-square)]()  
[![GitHub Issues](https://img.shields.io/github/issues/amraneze/sliding-window?style=flat-square)]()
[![codecov](https://codecov.io/gh/Amraneze/sliding-window/branch/master/graph/badge.svg)](https://codecov.io/gh/Amraneze/sliding-window)

Sliding Window is an npm module which does not process data while the queue is full.

> NOTE: For each 500 ms the module is checking if the duration of each element of the queue exceeded the time limit (which is the window slide).

## Installation

### With NPM

```bash
$ npm install sliding-window
```

### With Yarn

```bash
$ yarn add sliding-window
```

## Usage

You should import the module after installing it with npm/yarn

```node
import WindowSliding from 'sliding-window';

const windowSliding = new WindowSliding(60 * 1000, 10);
```

There are two paramaters in the constructor, the first one to define the time limit in seconds and the second for the maximum data that can be processed within the time limit.

## Building

You can pull the project and run the following command to install the dependencies of the project:

### With NPM

```bash
$ npm install
```

### With Yarn

```bash
$ yarn install
```

then this command to build it:

### With NPM

```bash
$ npm run build
```

### With Yarn

```bash
$ yarn run build
```

## Testing

### With NPM

```bash
$ npm run test
```

### With Yarn

```bash
$ yarn run test
```

## Contributions

Contributions are always welcome via pull requests.
