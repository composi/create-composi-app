module.exports = opts => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="viewport-fit" content="cover">
  <title>${opts.name}</title>
  <link rel="stylesheet" href="/dist/css/styles.css">
  <link rel="icon" type="image/png" href="/dist/images/favicons/favicon-16x16.png" sizes="16x16" />
  <link rel="icon" type="image/png" href="/dist/images/favicons/favicon-32x32.png" sizes="32x32" />
</head>
<body>
  <header class="masthead"></header>
  <script src="/dist/js/app.js"></script>
</body>
</html>
`
}