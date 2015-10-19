import test from 'ava'
import <%= camelizedPackageName %> from './'

test('<%= packageName %> does something awesome', t => {
  t.plan(1)

  t.true(<%= camelizedPackageName %>())
})
