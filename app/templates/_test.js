'use strict'

var test = require('tape')
var <%= camelizedPackageName %> = require('..')

test('<%= packageName %>', function (t) {
  t.plan(1)

  t.equal(<%= camelizedPackageName %>(), true)
})
