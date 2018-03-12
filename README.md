# Medieval Song

[![Dependency Status](https://gemnasium.com/badges/github.com/yale-web-technologies/medieval-song.svg)](https://gemnasium.com/github.com/yale-web-technologies/medieval-song)

## Development

### Running

Rails web server
```
rails s
```

Webpack dev server
```bash
./bin/webpack-dev-server
```

### Update Dependencies
```
bin/install_mirador.sh SRC_DIR
```
`SRC_DIR` is the path of `dist/` built under the project https://github.com/gigamorph/mirador-proxy .

Update `/vendor/assets/javascripts/mirador-dialog-builder.bootstrap4.js` and
`vendor/assets/javascripts/mirador-proxy.js` manually.

