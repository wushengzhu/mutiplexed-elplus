;(function (e, l) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = l(require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['vue'], l)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self), (e.index = l(e.Vue)))
})(this, function (e) {
  'use strict'
  const l = o => {
      if (o) return o.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
    },
    k6 = e.defineComponent({
      __name: 'index',
      props: {
        data: { type: Array, required: !0 },
        defaultActive: { type: String, default: '/' },
        router: { type: Boolean, default: !1 },
        name: { type: String, default: 'name' },
        index: { type: String, default: 'index' },
        icon: { type: String, default: 'icon' },
        children: { type: String, default: 'children' }
      },
      setup(o) {
        return (a, r) => {
          const c = e.resolveComponent('el-menu-item'),
            n = e.resolveComponent('el-sub-menu'),
            t = e.resolveComponent('el-menu')
          return (
            e.openBlock(),
            e.createBlock(
              t,
              e.mergeProps(
                {
                  class: 'el-menu-vertical-demo',
                  style: { height: '100vh' },
                  'default-active': o.defaultActive,
                  router: o.router
                },
                a.$attrs
              ),
              {
                default: e.withCtx(() => [
                  (e.openBlock(!0),
                  e.createElementBlock(
                    e.Fragment,
                    null,
                    e.renderList(
                      o.data,
                      (s, $f) => (
                        e.openBlock(),
                        e.createElementBlock(
                          e.Fragment,
                          { key: $f },
                          [
                            !s[o.children] || !s[o.children].length
                              ? (e.openBlock(),
                                e.createBlock(
                                  c,
                                  { key: 0, index: s[o.index] },
                                  {
                                    default: e.withCtx(() => [
                                      s[o.icon]
                                        ? (e.openBlock(),
                                          e.createBlock(
                                            e.resolveDynamicComponent(
                                              `el-icon-${e.unref(l)(s[o.icon])}`
                                            ),
                                            { key: 0 }
                                          ))
                                        : e.createCommentVNode('', !0),
                                      e.createElementVNode(
                                        'span',
                                        null,
                                        e.toDisplayString(s[o.name]),
                                        1
                                      )
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ['index']
                                ))
                              : e.createCommentVNode('', !0),
                            s[o.children] && s[o.children].length
                              ? (e.openBlock(),
                                e.createBlock(
                                  n,
                                  { key: 1, index: s[o.index] },
                                  {
                                    title: e.withCtx(() => [
                                      s[o.icon]
                                        ? (e.openBlock(),
                                          e.createBlock(
                                            e.resolveDynamicComponent(
                                              `el-icon-${e.unref(l)(s[o.icon])}`
                                            ),
                                            { key: 0 }
                                          ))
                                        : e.createCommentVNode('', !0),
                                      e.createElementVNode(
                                        'span',
                                        null,
                                        e.toDisplayString(s[o.name]),
                                        1
                                      )
                                    ]),
                                    default: e.withCtx(() => [
                                      (e.openBlock(!0),
                                      e.createElementBlock(
                                        e.Fragment,
                                        null,
                                        e.renderList(
                                          s,
                                          (p, hf) => (
                                            e.openBlock(),
                                            e.createBlock(
                                              c,
                                              { key: hf, index: p.index },
                                              {
                                                default: e.withCtx(() => [
                                                  p[o.icon]
                                                    ? (e.openBlock(),
                                                      e.createBlock(
                                                        e.resolveDynamicComponent(
                                                          `el-icon-${e.unref(l)(p[o.icon])}`
                                                        ),
                                                        { key: 0 }
                                                      ))
                                                    : e.createCommentVNode('', !0),
                                                  e.createElementVNode(
                                                    'span',
                                                    null,
                                                    e.toDisplayString(p[o.name]),
                                                    1
                                                  )
                                                ]),
                                                _: 2
                                              },
                                              1032,
                                              ['index']
                                            )
                                          )
                                        ),
                                        128
                                      ))
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ['index']
                                ))
                              : e.createCommentVNode('', !0)
                          ],
                          64
                        )
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              },
              16,
              ['default-active', 'router']
            )
          )
        }
      }
    }),
    _f = '',
    C6 = ((o, a) => {
      const r = o.__vccOpts || o
      for (const [c, n] of a) r[c] = n
      return r
    })(k6, [['__scopeId', 'data-v-0de67c76']])
  var i = e.defineComponent({ name: 'Aim' })
  const B6 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    V6 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z'
      },
      null,
      -1
    ),
    u6 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z'
      },
      null,
      -1
    )
  function x6(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', B6, [V6, u6])
  }
  ;(i.render = x6), (i.__file = 'packages/components/Aim.vue')
  const v6 = i
  var d = e.defineComponent({ name: 'AddLocation' })
  const H6 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    M6 = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z' },
      null,
      -1
    ),
    N6 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z'
      },
      null,
      -1
    ),
    L6 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z'
      },
      null,
      -1
    )
  function A6(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', H6, [M6, N6, L6])
  }
  ;(d.render = A6), (d.__file = 'packages/components/AddLocation.vue')
  const S6 = d
  var $ = e.defineComponent({ name: 'Apple' })
  const F6 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    q6 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z'
      },
      null,
      -1
    )
  function D6(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', F6, [q6])
  }
  ;($.render = D6), ($.__file = 'packages/components/Apple.vue')
  const y6 = $
  var h = e.defineComponent({ name: 'AlarmClock' })
  const P6 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    R6 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z'
      },
      null,
      -1
    ),
    T6 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z'
      },
      null,
      -1
    )
  function b6(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', P6, [R6, T6])
  }
  ;(h.render = b6), (h.__file = 'packages/components/AlarmClock.vue')
  const O6 = h
  var _ = e.defineComponent({ name: 'ArrowDown' })
  const I6 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    U6 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z'
      },
      null,
      -1
    )
  function G6(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', I6, [U6])
  }
  ;(_.render = G6), (_.__file = 'packages/components/ArrowDown.vue')
  const W6 = _
  var m = e.defineComponent({ name: 'ArrowDownBold' })
  const E6 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    j6 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z'
      },
      null,
      -1
    )
  function K6(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', E6, [j6])
  }
  ;(m.render = K6), (m.__file = 'packages/components/ArrowDownBold.vue')
  const Z6 = m
  var w = e.defineComponent({ name: 'ArrowLeft' })
  const Q6 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    J6 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z'
      },
      null,
      -1
    )
  function X6(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Q6, [J6])
  }
  ;(w.render = X6), (w.__file = 'packages/components/ArrowLeft.vue')
  const Y6 = w
  var f = e.defineComponent({ name: 'ArrowLeftBold' })
  const e3 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    o3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z'
      },
      null,
      -1
    )
  function t3(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', e3, [o3])
  }
  ;(f.render = t3), (f.__file = 'packages/components/ArrowLeftBold.vue')
  const n3 = f
  var g = e.defineComponent({ name: 'ArrowRightBold' })
  const r3 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    c3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z'
      },
      null,
      -1
    )
  function a3(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', r3, [c3])
  }
  ;(g.render = a3), (g.__file = 'packages/components/ArrowRightBold.vue')
  const s3 = g
  var z = e.defineComponent({ name: 'ArrowUp' })
  const l3 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    p3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z'
      },
      null,
      -1
    )
  function i3(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', l3, [p3])
  }
  ;(z.render = i3), (z.__file = 'packages/components/ArrowUp.vue')
  const d3 = z
  var k = e.defineComponent({ name: 'Back' })
  const $3 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    h3 = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z' },
      null,
      -1
    ),
    _3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z'
      },
      null,
      -1
    )
  function m3(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', $3, [h3, _3])
  }
  ;(k.render = m3), (k.__file = 'packages/components/Back.vue')
  const w3 = k
  var C = e.defineComponent({ name: 'Bell' })
  const f3 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    g3 = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z' },
      null,
      -1
    ),
    z3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z'
      },
      null,
      -1
    ),
    k3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z'
      },
      null,
      -1
    )
  function C3(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', f3, [g3, z3, k3])
  }
  ;(C.render = C3), (C.__file = 'packages/components/Bell.vue')
  const B3 = C
  var B = e.defineComponent({ name: 'Baseball' })
  const V3 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    u3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z'
      },
      null,
      -1
    ),
    x3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z'
      },
      null,
      -1
    )
  function v3(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', V3, [u3, x3])
  }
  ;(B.render = v3), (B.__file = 'packages/components/Baseball.vue')
  const H3 = B
  var V = e.defineComponent({ name: 'Bicycle' })
  const M3 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    N3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z'
      },
      null,
      -1
    ),
    L3 = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z' },
      null,
      -1
    ),
    A3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z'
      },
      null,
      -1
    ),
    S3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z'
      },
      null,
      -1
    ),
    F3 = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'm373.376 599.808-42.752-47.616 320-288 42.752 47.616z' },
      null,
      -1
    )
  function q3(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', M3, [N3, L3, A3, S3, F3])
  }
  ;(V.render = q3), (V.__file = 'packages/components/Bicycle.vue')
  const D3 = V
  var u = e.defineComponent({ name: 'BellFilled' })
  const y3 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    P3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z'
      },
      null,
      -1
    )
  function R3(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', y3, [P3])
  }
  ;(u.render = R3), (u.__file = 'packages/components/BellFilled.vue')
  const T3 = u
  var x = e.defineComponent({ name: 'Basketball' })
  const b3 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    O3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336zm-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8zm106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6z'
      },
      null,
      -1
    )
  function I3(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', b3, [O3])
  }
  ;(x.render = I3), (x.__file = 'packages/components/Basketball.vue')
  const U3 = x
  var v = e.defineComponent({ name: 'Bottom' })
  const G3 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    W3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z'
      },
      null,
      -1
    )
  function E3(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', G3, [W3])
  }
  ;(v.render = E3), (v.__file = 'packages/components/Bottom.vue')
  const j3 = v
  var H = e.defineComponent({ name: 'Box' })
  const K3 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Z3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z'
      },
      null,
      -1
    ),
    Q3 = e.createVNode('path', { fill: 'currentColor', d: 'M64 320h896v64H64z' }, null, -1),
    J3 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z'
      },
      null,
      -1
    )
  function X3(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', K3, [Z3, Q3, J3])
  }
  ;(H.render = X3), (H.__file = 'packages/components/Box.vue')
  const Y3 = H
  var M = e.defineComponent({ name: 'Briefcase' })
  const ee = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    oe = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z'
      },
      null,
      -1
    )
  function te(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ee, [oe])
  }
  ;(M.render = te), (M.__file = 'packages/components/Briefcase.vue')
  const ne = M
  var N = e.defineComponent({ name: 'BrushFilled' })
  const re = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ce = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z'
      },
      null,
      -1
    )
  function ae(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', re, [ce])
  }
  ;(N.render = ae), (N.__file = 'packages/components/BrushFilled.vue')
  const se = N
  var L = e.defineComponent({ name: 'Bowl' })
  const le = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    pe = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256h404.864zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424L680.576 320zM352 768v64h320v-64H352z'
      },
      null,
      -1
    )
  function ie(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', le, [pe])
  }
  ;(L.render = ie), (L.__file = 'packages/components/Bowl.vue')
  const de = L
  var A = e.defineComponent({ name: 'Avatar' })
  const $e = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    he = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z'
      },
      null,
      -1
    )
  function _e(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', $e, [he])
  }
  ;(A.render = _e), (A.__file = 'packages/components/Avatar.vue')
  const me = A
  var S = e.defineComponent({ name: 'Brush' })
  const we = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    fe = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64V448zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z'
      },
      null,
      -1
    )
  function ge(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', we, [fe])
  }
  ;(S.render = ge), (S.__file = 'packages/components/Brush.vue')
  const ze = S
  var F = e.defineComponent({ name: 'Burger' })
  const ke = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ce = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z'
      },
      null,
      -1
    )
  function Be(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ke, [Ce])
  }
  ;(F.render = Be), (F.__file = 'packages/components/Burger.vue')
  const Ve = F
  var q = e.defineComponent({ name: 'Camera' })
  const ue = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    xe = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z'
      },
      null,
      -1
    )
  function ve(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ue, [xe])
  }
  ;(q.render = ve), (q.__file = 'packages/components/Camera.vue')
  const He = q
  var D = e.defineComponent({ name: 'BottomLeft' })
  const Me = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ne = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z'
      },
      null,
      -1
    ),
    Le = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z'
      },
      null,
      -1
    )
  function Ae(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Me, [Ne, Le])
  }
  ;(D.render = Ae), (D.__file = 'packages/components/BottomLeft.vue')
  const Se = D
  var y = e.defineComponent({ name: 'Calendar' })
  const Fe = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    qe = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z'
      },
      null,
      -1
    )
  function De(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Fe, [qe])
  }
  ;(y.render = De), (y.__file = 'packages/components/Calendar.vue')
  const ye = y
  var P = e.defineComponent({ name: 'CaretBottom' })
  const Pe = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Re = e.createVNode('path', { fill: 'currentColor', d: 'm192 384 320 384 320-384z' }, null, -1)
  function Te(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Pe, [Re])
  }
  ;(P.render = Te), (P.__file = 'packages/components/CaretBottom.vue')
  const be = P
  var R = e.defineComponent({ name: 'CaretLeft' })
  const Oe = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ie = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M672 192 288 511.936 672 832z' },
      null,
      -1
    )
  function Ue(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Oe, [Ie])
  }
  ;(R.render = Ue), (R.__file = 'packages/components/CaretLeft.vue')
  const Ge = R
  var T = e.defineComponent({ name: 'CaretRight' })
  const We = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ee = e.createVNode('path', { fill: 'currentColor', d: 'M384 192v640l384-320.064z' }, null, -1)
  function je(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', We, [Ee])
  }
  ;(T.render = je), (T.__file = 'packages/components/CaretRight.vue')
  const Ke = T
  var b = e.defineComponent({ name: 'CaretTop' })
  const Ze = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Qe = e.createVNode('path', { fill: 'currentColor', d: 'M512 320 192 704h639.936z' }, null, -1)
  function Je(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Ze, [Qe])
  }
  ;(b.render = Je), (b.__file = 'packages/components/CaretTop.vue')
  const Xe = b
  var O = e.defineComponent({ name: 'ChatDotSquare' })
  const Ye = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    eo = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z'
      },
      null,
      -1
    ),
    oo = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z'
      },
      null,
      -1
    )
  function to(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Ye, [eo, oo])
  }
  ;(O.render = to), (O.__file = 'packages/components/ChatDotSquare.vue')
  const no = O
  var I = e.defineComponent({ name: 'Cellphone' })
  const ro = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    co = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z'
      },
      null,
      -1
    )
  function ao(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ro, [co])
  }
  ;(I.render = ao), (I.__file = 'packages/components/Cellphone.vue')
  const so = I
  var U = e.defineComponent({ name: 'ChatDotRound' })
  const lo = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    po = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z'
      },
      null,
      -1
    ),
    io = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z'
      },
      null,
      -1
    )
  function $o(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', lo, [po, io])
  }
  ;(U.render = $o), (U.__file = 'packages/components/ChatDotRound.vue')
  const ho = U
  var G = e.defineComponent({ name: 'ChatLineSquare' })
  const _o = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    mo = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z'
      },
      null,
      -1
    ),
    wo = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z'
      },
      null,
      -1
    )
  function fo(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', _o, [mo, wo])
  }
  ;(G.render = fo), (G.__file = 'packages/components/ChatLineSquare.vue')
  const go = G
  var W = e.defineComponent({ name: 'ChatLineRound' })
  const zo = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ko = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z'
      },
      null,
      -1
    ),
    Co = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z'
      },
      null,
      -1
    )
  function Bo(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', zo, [ko, Co])
  }
  ;(W.render = Bo), (W.__file = 'packages/components/ChatLineRound.vue')
  const Vo = W
  var E = e.defineComponent({ name: 'ChatRound' })
  const uo = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    xo = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z'
      },
      null,
      -1
    )
  function vo(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', uo, [xo])
  }
  ;(E.render = vo), (E.__file = 'packages/components/ChatRound.vue')
  const Ho = E
  var j = e.defineComponent({ name: 'Check' })
  const Mo = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    No = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z'
      },
      null,
      -1
    )
  function Lo(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Mo, [No])
  }
  ;(j.render = Lo), (j.__file = 'packages/components/Check.vue')
  const Ao = j
  var K = e.defineComponent({ name: 'ChatSquare' })
  const So = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Fo = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z'
      },
      null,
      -1
    )
  function qo(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', So, [Fo])
  }
  ;(K.render = qo), (K.__file = 'packages/components/ChatSquare.vue')
  const Do = K
  var Z = e.defineComponent({ name: 'Cherry' })
  const yo = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Po = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z'
      },
      null,
      -1
    )
  function Ro(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', yo, [Po])
  }
  ;(Z.render = Ro), (Z.__file = 'packages/components/Cherry.vue')
  const To = Z
  var Q = e.defineComponent({ name: 'Chicken' })
  const bo = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Oo = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84zM244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52 3.52-56.32zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z'
      },
      null,
      -1
    )
  function Io(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', bo, [Oo])
  }
  ;(Q.render = Io), (Q.__file = 'packages/components/Chicken.vue')
  const Uo = Q
  var J = e.defineComponent({ name: 'CircleCheckFilled' })
  const Go = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Wo = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z'
      },
      null,
      -1
    )
  function Eo(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Go, [Wo])
  }
  ;(J.render = Eo), (J.__file = 'packages/components/CircleCheckFilled.vue')
  const jo = J
  var X = e.defineComponent({ name: 'CircleCheck' })
  const Ko = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Zo = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z'
      },
      null,
      -1
    ),
    Qo = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z'
      },
      null,
      -1
    )
  function Jo(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Ko, [Zo, Qo])
  }
  ;(X.render = Jo), (X.__file = 'packages/components/CircleCheck.vue')
  const Xo = X
  var Y = e.defineComponent({ name: 'Checked' })
  const Yo = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    et = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z'
      },
      null,
      -1
    )
  function ot(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Yo, [et])
  }
  ;(Y.render = ot), (Y.__file = 'packages/components/Checked.vue')
  const tt = Y
  var e2 = e.defineComponent({ name: 'CircleCloseFilled' })
  const nt = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    rt = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z'
      },
      null,
      -1
    )
  function ct(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', nt, [rt])
  }
  ;(e2.render = ct), (e2.__file = 'packages/components/CircleCloseFilled.vue')
  const at = e2
  var o2 = e.defineComponent({ name: 'CircleClose' })
  const st = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    lt = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z'
      },
      null,
      -1
    ),
    pt = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z'
      },
      null,
      -1
    )
  function it(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', st, [lt, pt])
  }
  ;(o2.render = it), (o2.__file = 'packages/components/CircleClose.vue')
  const dt = o2
  var t2 = e.defineComponent({ name: 'ArrowRight' })
  const $t = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ht = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z'
      },
      null,
      -1
    )
  function _t(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', $t, [ht])
  }
  ;(t2.render = _t), (t2.__file = 'packages/components/ArrowRight.vue')
  const mt = t2
  var n2 = e.defineComponent({ name: 'CirclePlus' })
  const wt = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ft = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z' },
      null,
      -1
    ),
    gt = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z' },
      null,
      -1
    ),
    zt = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z'
      },
      null,
      -1
    )
  function kt(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', wt, [ft, gt, zt])
  }
  ;(n2.render = kt), (n2.__file = 'packages/components/CirclePlus.vue')
  const Ct = n2
  var r2 = e.defineComponent({ name: 'Clock' })
  const Bt = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Vt = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z'
      },
      null,
      -1
    ),
    ut = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z'
      },
      null,
      -1
    ),
    xt = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z' },
      null,
      -1
    )
  function vt(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Bt, [Vt, ut, xt])
  }
  ;(r2.render = vt), (r2.__file = 'packages/components/Clock.vue')
  const Ht = r2
  var c2 = e.defineComponent({ name: 'CloseBold' })
  const Mt = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Nt = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z'
      },
      null,
      -1
    )
  function Lt(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Mt, [Nt])
  }
  ;(c2.render = Lt), (c2.__file = 'packages/components/CloseBold.vue')
  const At = c2
  var a2 = e.defineComponent({ name: 'Close' })
  const St = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ft = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z'
      },
      null,
      -1
    )
  function qt(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', St, [Ft])
  }
  ;(a2.render = qt), (a2.__file = 'packages/components/Close.vue')
  const Dt = a2
  var s2 = e.defineComponent({ name: 'Cloudy' })
  const yt = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Pt = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z'
      },
      null,
      -1
    )
  function Rt(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', yt, [Pt])
  }
  ;(s2.render = Rt), (s2.__file = 'packages/components/Cloudy.vue')
  const Tt = s2
  var l2 = e.defineComponent({ name: 'CirclePlusFilled' })
  const bt = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ot = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z'
      },
      null,
      -1
    )
  function It(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', bt, [Ot])
  }
  ;(l2.render = It), (l2.__file = 'packages/components/CirclePlusFilled.vue')
  const Ut = l2
  var p2 = e.defineComponent({ name: 'CoffeeCup' })
  const Gt = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Wt = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z'
      },
      null,
      -1
    )
  function Et(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Gt, [Wt])
  }
  ;(p2.render = Et), (p2.__file = 'packages/components/CoffeeCup.vue')
  const jt = p2
  var i2 = e.defineComponent({ name: 'ColdDrink' })
  const Kt = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Zt = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z'
      },
      null,
      -1
    )
  function Qt(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Kt, [Zt])
  }
  ;(i2.render = Qt), (i2.__file = 'packages/components/ColdDrink.vue')
  const Jt = i2
  var d2 = e.defineComponent({ name: 'Coin' })
  const Xt = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Yt = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z'
      },
      null,
      -1
    ),
    e8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z'
      },
      null,
      -1
    ),
    o8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z'
      },
      null,
      -1
    )
  function t8(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Xt, [Yt, e8, o8])
  }
  ;(d2.render = t8), (d2.__file = 'packages/components/Coin.vue')
  const n8 = d2
  var $2 = e.defineComponent({ name: 'ArrowUpBold' })
  const r8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    c8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z'
      },
      null,
      -1
    )
  function a8(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', r8, [c8])
  }
  ;($2.render = a8), ($2.__file = 'packages/components/ArrowUpBold.vue')
  const s8 = $2
  var h2 = e.defineComponent({ name: 'CollectionTag' })
  const l8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    p8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z'
      },
      null,
      -1
    )
  function i8(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', l8, [p8])
  }
  ;(h2.render = i8), (h2.__file = 'packages/components/CollectionTag.vue')
  const d8 = h2
  var _2 = e.defineComponent({ name: 'BottomRight' })
  const $8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    h8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z'
      },
      null,
      -1
    ),
    _8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z'
      },
      null,
      -1
    )
  function m8(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', $8, [h8, _8])
  }
  ;(_2.render = m8), (_2.__file = 'packages/components/BottomRight.vue')
  const w8 = _2
  var m2 = e.defineComponent({ name: 'Coffee' })
  const f8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    g8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z'
      },
      null,
      -1
    )
  function z8(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', f8, [g8])
  }
  ;(m2.render = z8), (m2.__file = 'packages/components/Coffee.vue')
  const k8 = m2
  var w2 = e.defineComponent({ name: 'CameraFilled' })
  const C8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    B8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z'
      },
      null,
      -1
    )
  function V8(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', C8, [B8])
  }
  ;(w2.render = V8), (w2.__file = 'packages/components/CameraFilled.vue')
  const u8 = w2
  var f2 = e.defineComponent({ name: 'Collection' })
  const x8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    v8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z'
      },
      null,
      -1
    ),
    H8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z'
      },
      null,
      -1
    )
  function M8(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', x8, [v8, H8])
  }
  ;(f2.render = M8), (f2.__file = 'packages/components/Collection.vue')
  const N8 = f2
  var g2 = e.defineComponent({ name: 'Cpu' })
  const L8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    A8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z'
      },
      null,
      -1
    ),
    S8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z'
      },
      null,
      -1
    )
  function F8(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', L8, [A8, S8])
  }
  ;(g2.render = F8), (g2.__file = 'packages/components/Cpu.vue')
  const q8 = g2
  var z2 = e.defineComponent({ name: 'Crop' })
  const D8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    y8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z'
      },
      null,
      -1
    ),
    P8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z'
      },
      null,
      -1
    )
  function R8(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', D8, [y8, P8])
  }
  ;(z2.render = R8), (z2.__file = 'packages/components/Crop.vue')
  const T8 = z2
  var k2 = e.defineComponent({ name: 'Coordinate' })
  const b8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    O8 = e.createVNode('path', { fill: 'currentColor', d: 'M480 512h64v320h-64z' }, null, -1),
    I8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z'
      },
      null,
      -1
    )
  function U8(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', b8, [O8, I8])
  }
  ;(k2.render = U8), (k2.__file = 'packages/components/Coordinate.vue')
  const G8 = k2
  var C2 = e.defineComponent({ name: 'DArrowLeft' })
  const W8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    E8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z'
      },
      null,
      -1
    )
  function j8(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', W8, [E8])
  }
  ;(C2.render = j8), (C2.__file = 'packages/components/DArrowLeft.vue')
  const K8 = C2
  var B2 = e.defineComponent({ name: 'Compass' })
  const Z8 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Q8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z'
      },
      null,
      -1
    ),
    J8 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z'
      },
      null,
      -1
    )
  function X8(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Z8, [Q8, J8])
  }
  ;(B2.render = X8), (B2.__file = 'packages/components/Compass.vue')
  const Y8 = B2
  var V2 = e.defineComponent({ name: 'Connection' })
  const en = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    on = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z'
      },
      null,
      -1
    ),
    tn = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z'
      },
      null,
      -1
    )
  function nn(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', en, [on, tn])
  }
  ;(V2.render = nn), (V2.__file = 'packages/components/Connection.vue')
  const rn = V2
  var u2 = e.defineComponent({ name: 'CreditCard' })
  const cn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    an = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z'
      },
      null,
      -1
    ),
    sn = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M64 320h896v64H64v-64zm0 128h896v64H64v-64zm128 192h256v64H192z'
      },
      null,
      -1
    )
  function ln(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', cn, [an, sn])
  }
  ;(u2.render = ln), (u2.__file = 'packages/components/CreditCard.vue')
  const pn = u2
  var x2 = e.defineComponent({ name: 'DataBoard' })
  const dn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    $n = e.createVNode('path', { fill: 'currentColor', d: 'M32 128h960v64H32z' }, null, -1),
    hn = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z'
      },
      null,
      -1
    ),
    _n = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z'
      },
      null,
      -1
    )
  function mn(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', dn, [$n, hn, _n])
  }
  ;(x2.render = mn), (x2.__file = 'packages/components/DataBoard.vue')
  const wn = x2
  var v2 = e.defineComponent({ name: 'DArrowRight' })
  const fn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    gn = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z'
      },
      null,
      -1
    )
  function zn(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', fn, [gn])
  }
  ;(v2.render = zn), (v2.__file = 'packages/components/DArrowRight.vue')
  const kn = v2
  var H2 = e.defineComponent({ name: 'Dessert' })
  const Cn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Bn = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416zm287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736zM384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z'
      },
      null,
      -1
    )
  function Vn(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Cn, [Bn])
  }
  ;(H2.render = Vn), (H2.__file = 'packages/components/Dessert.vue')
  const un = H2
  var M2 = e.defineComponent({ name: 'DeleteLocation' })
  const xn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    vn = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z' },
      null,
      -1
    ),
    Hn = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z'
      },
      null,
      -1
    ),
    Mn = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z' },
      null,
      -1
    )
  function Nn(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', xn, [vn, Hn, Mn])
  }
  ;(M2.render = Nn), (M2.__file = 'packages/components/DeleteLocation.vue')
  const Ln = M2
  var N2 = e.defineComponent({ name: 'DCaret' })
  const An = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Sn = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'm512 128 288 320H224l288-320zM224 576h576L512 896 224 576z' },
      null,
      -1
    )
  function Fn(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', An, [Sn])
  }
  ;(N2.render = Fn), (N2.__file = 'packages/components/DCaret.vue')
  const qn = N2
  var L2 = e.defineComponent({ name: 'Delete' })
  const Dn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    yn = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z'
      },
      null,
      -1
    )
  function Pn(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Dn, [yn])
  }
  ;(L2.render = Pn), (L2.__file = 'packages/components/Delete.vue')
  const Rn = L2
  var A2 = e.defineComponent({ name: 'Dish' })
  const Tn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    bn = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z'
      },
      null,
      -1
    )
  function On(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Tn, [bn])
  }
  ;(A2.render = On), (A2.__file = 'packages/components/Dish.vue')
  const In = A2
  var S2 = e.defineComponent({ name: 'DishDot' })
  const Un = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Gn = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z'
      },
      null,
      -1
    )
  function Wn(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Un, [Gn])
  }
  ;(S2.render = Wn), (S2.__file = 'packages/components/DishDot.vue')
  const En = S2
  var F2 = e.defineComponent({ name: 'DocumentCopy' })
  const jn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Kn = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z'
      },
      null,
      -1
    )
  function Zn(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', jn, [Kn])
  }
  ;(F2.render = Zn), (F2.__file = 'packages/components/DocumentCopy.vue')
  const Qn = F2
  var q2 = e.defineComponent({ name: 'Discount' })
  const Jn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Xn = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z'
      },
      null,
      -1
    ),
    Yn = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z'
      },
      null,
      -1
    )
  function er(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Jn, [Xn, Yn])
  }
  ;(q2.render = er), (q2.__file = 'packages/components/Discount.vue')
  const or = q2
  var D2 = e.defineComponent({ name: 'DocumentChecked' })
  const tr = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    nr = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z'
      },
      null,
      -1
    )
  function rr(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', tr, [nr])
  }
  ;(D2.render = rr), (D2.__file = 'packages/components/DocumentChecked.vue')
  const cr = D2
  var y2 = e.defineComponent({ name: 'DocumentAdd' })
  const ar = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    sr = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z'
      },
      null,
      -1
    )
  function lr(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ar, [sr])
  }
  ;(y2.render = lr), (y2.__file = 'packages/components/DocumentAdd.vue')
  const pr = y2
  var P2 = e.defineComponent({ name: 'DocumentRemove' })
  const ir = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    dr = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z'
      },
      null,
      -1
    )
  function $r(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ir, [dr])
  }
  ;(P2.render = $r), (P2.__file = 'packages/components/DocumentRemove.vue')
  const hr = P2
  var R2 = e.defineComponent({ name: 'DataAnalysis' })
  const _r = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    mr = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z'
      },
      null,
      -1
    )
  function wr(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', _r, [mr])
  }
  ;(R2.render = wr), (R2.__file = 'packages/components/DataAnalysis.vue')
  const fr = R2
  var T2 = e.defineComponent({ name: 'DeleteFilled' })
  const gr = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    zr = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z'
      },
      null,
      -1
    )
  function kr(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', gr, [zr])
  }
  ;(T2.render = kr), (T2.__file = 'packages/components/DeleteFilled.vue')
  const Cr = T2
  var b2 = e.defineComponent({ name: 'Download' })
  const Br = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Vr = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z'
      },
      null,
      -1
    )
  function ur(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Br, [Vr])
  }
  ;(b2.render = ur), (b2.__file = 'packages/components/Download.vue')
  const xr = b2
  var O2 = e.defineComponent({ name: 'Drizzling' })
  const vr = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Hr = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z'
      },
      null,
      -1
    )
  function Mr(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', vr, [Hr])
  }
  ;(O2.render = Mr), (O2.__file = 'packages/components/Drizzling.vue')
  const Nr = O2
  var I2 = e.defineComponent({ name: 'Eleme' })
  const Lr = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ar = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z'
      },
      null,
      -1
    )
  function Sr(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Lr, [Ar])
  }
  ;(I2.render = Sr), (I2.__file = 'packages/components/Eleme.vue')
  const Fr = I2
  var U2 = e.defineComponent({ name: 'ElemeFilled' })
  const qr = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Dr = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112zm150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z'
      },
      null,
      -1
    )
  function yr(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', qr, [Dr])
  }
  ;(U2.render = yr), (U2.__file = 'packages/components/ElemeFilled.vue')
  const Pr = U2
  var G2 = e.defineComponent({ name: 'Edit' })
  const Rr = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Tr = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z'
      },
      null,
      -1
    ),
    br = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z'
      },
      null,
      -1
    )
  function Or(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Rr, [Tr, br])
  }
  ;(G2.render = Or), (G2.__file = 'packages/components/Edit.vue')
  const Ir = G2
  var W2 = e.defineComponent({ name: 'Failed' })
  const Ur = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Gr = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z'
      },
      null,
      -1
    )
  function Wr(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Ur, [Gr])
  }
  ;(W2.render = Wr), (W2.__file = 'packages/components/Failed.vue')
  const Er = W2
  var E2 = e.defineComponent({ name: 'Expand' })
  const jr = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Kr = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z'
      },
      null,
      -1
    )
  function Zr(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', jr, [Kr])
  }
  ;(E2.render = Zr), (E2.__file = 'packages/components/Expand.vue')
  const Qr = E2
  var j2 = e.defineComponent({ name: 'Female' })
  const Jr = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Xr = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z'
      },
      null,
      -1
    ),
    Yr = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z' },
      null,
      -1
    ),
    ec = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z' },
      null,
      -1
    )
  function oc(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Jr, [Xr, Yr, ec])
  }
  ;(j2.render = oc), (j2.__file = 'packages/components/Female.vue')
  const tc = j2
  var K2 = e.defineComponent({ name: 'Document' })
  const nc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    rc = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z'
      },
      null,
      -1
    )
  function cc(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', nc, [rc])
  }
  ;(K2.render = cc), (K2.__file = 'packages/components/Document.vue')
  const ac = K2
  var Z2 = e.defineComponent({ name: 'Film' })
  const sc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    lc = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z'
      },
      null,
      -1
    ),
    pc = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z'
      },
      null,
      -1
    )
  function ic(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', sc, [lc, pc])
  }
  ;(Z2.render = ic), (Z2.__file = 'packages/components/Film.vue')
  const dc = Z2
  var Q2 = e.defineComponent({ name: 'Finished' })
  const $c = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    hc = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z'
      },
      null,
      -1
    )
  function _c(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', $c, [hc])
  }
  ;(Q2.render = _c), (Q2.__file = 'packages/components/Finished.vue')
  const mc = Q2
  var J2 = e.defineComponent({ name: 'DataLine' })
  const wc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    fc = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z'
      },
      null,
      -1
    )
  function gc(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', wc, [fc])
  }
  ;(J2.render = gc), (J2.__file = 'packages/components/DataLine.vue')
  const zc = J2
  var X2 = e.defineComponent({ name: 'Filter' })
  const kc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Cc = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z'
      },
      null,
      -1
    )
  function Bc(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', kc, [Cc])
  }
  ;(X2.render = Bc), (X2.__file = 'packages/components/Filter.vue')
  const Vc = X2
  var Y2 = e.defineComponent({ name: 'Flag' })
  const uc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    xc = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M288 128h608L736 384l160 256H288v320h-96V64h96v64z' },
      null,
      -1
    )
  function vc(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', uc, [xc])
  }
  ;(Y2.render = vc), (Y2.__file = 'packages/components/Flag.vue')
  const Hc = Y2
  var e0 = e.defineComponent({ name: 'FolderChecked' })
  const Mc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Nc = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z'
      },
      null,
      -1
    )
  function Lc(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Mc, [Nc])
  }
  ;(e0.render = Lc), (e0.__file = 'packages/components/FolderChecked.vue')
  const Ac = e0
  var o0 = e.defineComponent({ name: 'FirstAidKit' })
  const Sc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Fc = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z'
      },
      null,
      -1
    ),
    qc = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z'
      },
      null,
      -1
    )
  function Dc(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Sc, [Fc, qc])
  }
  ;(o0.render = Dc), (o0.__file = 'packages/components/FirstAidKit.vue')
  const yc = o0
  var t0 = e.defineComponent({ name: 'FolderAdd' })
  const Pc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Rc = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z'
      },
      null,
      -1
    )
  function Tc(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Pc, [Rc])
  }
  ;(t0.render = Tc), (t0.__file = 'packages/components/FolderAdd.vue')
  const bc = t0
  var n0 = e.defineComponent({ name: 'Fold' })
  const Oc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ic = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z'
      },
      null,
      -1
    )
  function Uc(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Oc, [Ic])
  }
  ;(n0.render = Uc), (n0.__file = 'packages/components/Fold.vue')
  const Gc = n0
  var r0 = e.defineComponent({ name: 'FolderDelete' })
  const Wc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ec = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z'
      },
      null,
      -1
    )
  function jc(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Wc, [Ec])
  }
  ;(r0.render = jc), (r0.__file = 'packages/components/FolderDelete.vue')
  const Kc = r0
  var c0 = e.defineComponent({ name: 'DocumentDelete' })
  const Zc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Qc = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z'
      },
      null,
      -1
    )
  function Jc(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Zc, [Qc])
  }
  ;(c0.render = Jc), (c0.__file = 'packages/components/DocumentDelete.vue')
  const Xc = c0
  var a0 = e.defineComponent({ name: 'Folder' })
  const Yc = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ea = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z'
      },
      null,
      -1
    )
  function oa(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Yc, [ea])
  }
  ;(a0.render = oa), (a0.__file = 'packages/components/Folder.vue')
  const ta = a0
  var s0 = e.defineComponent({ name: 'Food' })
  const na = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ra = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z'
      },
      null,
      -1
    )
  function ca(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', na, [ra])
  }
  ;(s0.render = ca), (s0.__file = 'packages/components/Food.vue')
  const aa = s0
  var l0 = e.defineComponent({ name: 'FolderOpened' })
  const sa = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    la = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z'
      },
      null,
      -1
    )
  function pa(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', sa, [la])
  }
  ;(l0.render = pa), (l0.__file = 'packages/components/FolderOpened.vue')
  const ia = l0
  var p0 = e.defineComponent({ name: 'Football' })
  const da = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    $a = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z'
      },
      null,
      -1
    ),
    ha = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0zm-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0l-11.136-63.104zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z'
      },
      null,
      -1
    )
  function _a(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', da, [$a, ha])
  }
  ;(p0.render = _a), (p0.__file = 'packages/components/Football.vue')
  const ma = p0
  var i0 = e.defineComponent({ name: 'FolderRemove' })
  const wa = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    fa = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z'
      },
      null,
      -1
    )
  function ga(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', wa, [fa])
  }
  ;(i0.render = ga), (i0.__file = 'packages/components/FolderRemove.vue')
  const za = i0
  var d0 = e.defineComponent({ name: 'Fries' })
  const ka = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ca = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096V224zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160h37.12zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160h-16zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512h-1.216zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480V288zm-128 96V224a32 32 0 0 0-64 0v160h64-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704H253.12z'
      },
      null,
      -1
    )
  function Ba(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ka, [Ca])
  }
  ;(d0.render = Ba), (d0.__file = 'packages/components/Fries.vue')
  const Va = d0
  var $0 = e.defineComponent({ name: 'FullScreen' })
  const ua = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    xa = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z'
      },
      null,
      -1
    )
  function va(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ua, [xa])
  }
  ;($0.render = va), ($0.__file = 'packages/components/FullScreen.vue')
  const Ha = $0
  var h0 = e.defineComponent({ name: 'ForkSpoon' })
  const Ma = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Na = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z'
      },
      null,
      -1
    )
  function La(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Ma, [Na])
  }
  ;(h0.render = La), (h0.__file = 'packages/components/ForkSpoon.vue')
  const Aa = h0
  var _0 = e.defineComponent({ name: 'Goblet' })
  const Sa = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Fa = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z'
      },
      null,
      -1
    )
  function qa(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Sa, [Fa])
  }
  ;(_0.render = qa), (_0.__file = 'packages/components/Goblet.vue')
  const Da = _0
  var m0 = e.defineComponent({ name: 'GobletFull' })
  const ya = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Pa = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z'
      },
      null,
      -1
    )
  function Ra(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ya, [Pa])
  }
  ;(m0.render = Ra), (m0.__file = 'packages/components/GobletFull.vue')
  const Ta = m0
  var w0 = e.defineComponent({ name: 'Goods' })
  const ba = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Oa = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z'
      },
      null,
      -1
    )
  function Ia(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ba, [Oa])
  }
  ;(w0.render = Ia), (w0.__file = 'packages/components/Goods.vue')
  const Ua = w0
  var f0 = e.defineComponent({ name: 'GobletSquareFull' })
  const Ga = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Wa = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z'
      },
      null,
      -1
    )
  function Ea(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Ga, [Wa])
  }
  ;(f0.render = Ea), (f0.__file = 'packages/components/GobletSquareFull.vue')
  const ja = f0
  var g0 = e.defineComponent({ name: 'GoodsFilled' })
  const Ka = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Za = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z'
      },
      null,
      -1
    )
  function Qa(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Ka, [Za])
  }
  ;(g0.render = Qa), (g0.__file = 'packages/components/GoodsFilled.vue')
  const Ja = g0
  var z0 = e.defineComponent({ name: 'Grid' })
  const Xa = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ya = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z'
      },
      null,
      -1
    )
  function es(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Xa, [Ya])
  }
  ;(z0.render = es), (z0.__file = 'packages/components/Grid.vue')
  const os = z0
  var k0 = e.defineComponent({ name: 'Grape' })
  const ts = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ns = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64v67.2zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z'
      },
      null,
      -1
    )
  function rs(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ts, [ns])
  }
  ;(k0.render = rs), (k0.__file = 'packages/components/Grape.vue')
  const cs = k0
  var C0 = e.defineComponent({ name: 'GobletSquare' })
  const as = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ss = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z'
      },
      null,
      -1
    )
  function ls(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', as, [ss])
  }
  ;(C0.render = ls), (C0.__file = 'packages/components/GobletSquare.vue')
  const ps = C0
  var B0 = e.defineComponent({ name: 'Headset' })
  const is = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ds = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z'
      },
      null,
      -1
    )
  function $s(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', is, [ds])
  }
  ;(B0.render = $s), (B0.__file = 'packages/components/Headset.vue')
  const hs = B0
  var V0 = e.defineComponent({ name: 'Comment' })
  const _s = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ms = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z'
      },
      null,
      -1
    )
  function ws(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', _s, [ms])
  }
  ;(V0.render = ws), (V0.__file = 'packages/components/Comment.vue')
  const fs = V0
  var u0 = e.defineComponent({ name: 'HelpFilled' })
  const gs = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    zs = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z'
      },
      null,
      -1
    )
  function ks(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', gs, [zs])
  }
  ;(u0.render = ks), (u0.__file = 'packages/components/HelpFilled.vue')
  const Cs = u0
  var x0 = e.defineComponent({ name: 'Histogram' })
  const Bs = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Vs = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z'
      },
      null,
      -1
    )
  function us(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Bs, [Vs])
  }
  ;(x0.render = us), (x0.__file = 'packages/components/Histogram.vue')
  const xs = x0
  var v0 = e.defineComponent({ name: 'HomeFilled' })
  const vs = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Hs = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z' },
      null,
      -1
    )
  function Ms(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', vs, [Hs])
  }
  ;(v0.render = Ms), (v0.__file = 'packages/components/HomeFilled.vue')
  const Ns = v0
  var H0 = e.defineComponent({ name: 'Help' })
  const Ls = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    As = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896z'
      },
      null,
      -1
    )
  function Ss(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Ls, [As])
  }
  ;(H0.render = Ss), (H0.__file = 'packages/components/Help.vue')
  const Fs = H0
  var M0 = e.defineComponent({ name: 'House' })
  const qs = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ds = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z'
      },
      null,
      -1
    )
  function ys(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', qs, [Ds])
  }
  ;(M0.render = ys), (M0.__file = 'packages/components/House.vue')
  const Ps = M0
  var N0 = e.defineComponent({ name: 'IceCreamRound' })
  const Rs = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ts = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z'
      },
      null,
      -1
    )
  function bs(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Rs, [Ts])
  }
  ;(N0.render = bs), (N0.__file = 'packages/components/IceCreamRound.vue')
  const Os = N0
  var L0 = e.defineComponent({ name: 'HotWater' })
  const Is = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Us = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z'
      },
      null,
      -1
    )
  function Gs(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Is, [Us])
  }
  ;(L0.render = Gs), (L0.__file = 'packages/components/HotWater.vue')
  const Ws = L0
  var A0 = e.defineComponent({ name: 'IceCream' })
  const Es = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    js = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z'
      },
      null,
      -1
    )
  function Ks(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Es, [js])
  }
  ;(A0.render = Ks), (A0.__file = 'packages/components/IceCream.vue')
  const Zs = A0
  var S0 = e.defineComponent({ name: 'Files' })
  const Qs = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Js = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z'
      },
      null,
      -1
    )
  function Xs(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Qs, [Js])
  }
  ;(S0.render = Xs), (S0.__file = 'packages/components/Files.vue')
  const Ys = S0
  var F0 = e.defineComponent({ name: 'IceCreamSquare' })
  const el = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ol = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z'
      },
      null,
      -1
    )
  function tl(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', el, [ol])
  }
  ;(F0.render = tl), (F0.__file = 'packages/components/IceCreamSquare.vue')
  const nl = F0
  var q0 = e.defineComponent({ name: 'Key' })
  const rl = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    cl = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z'
      },
      null,
      -1
    )
  function al(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', rl, [cl])
  }
  ;(q0.render = al), (q0.__file = 'packages/components/Key.vue')
  const sl = q0
  var D0 = e.defineComponent({ name: 'IceTea' })
  const ll = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    pl = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z'
      },
      null,
      -1
    )
  function il(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ll, [pl])
  }
  ;(D0.render = il), (D0.__file = 'packages/components/IceTea.vue')
  const dl = D0
  var y0 = e.defineComponent({ name: 'KnifeFork' })
  const $l = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    hl = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z'
      },
      null,
      -1
    )
  function _l(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', $l, [hl])
  }
  ;(y0.render = _l), (y0.__file = 'packages/components/KnifeFork.vue')
  const ml = y0
  var P0 = e.defineComponent({ name: 'Iphone' })
  const wl = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    fl = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z'
      },
      null,
      -1
    )
  function gl(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', wl, [fl])
  }
  ;(P0.render = gl), (P0.__file = 'packages/components/Iphone.vue')
  const zl = P0
  var R0 = e.defineComponent({ name: 'InfoFilled' })
  const kl = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Cl = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z'
      },
      null,
      -1
    )
  function Bl(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', kl, [Cl])
  }
  ;(R0.render = Bl), (R0.__file = 'packages/components/InfoFilled.vue')
  const Vl = R0
  var T0 = e.defineComponent({ name: 'Link' })
  const ul = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    xl = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z'
      },
      null,
      -1
    )
  function vl(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ul, [xl])
  }
  ;(T0.render = vl), (T0.__file = 'packages/components/Link.vue')
  const Hl = T0
  var b0 = e.defineComponent({ name: 'IceDrink' })
  const Ml = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Nl = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z'
      },
      null,
      -1
    )
  function Ll(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Ml, [Nl])
  }
  ;(b0.render = Ll), (b0.__file = 'packages/components/IceDrink.vue')
  const Al = b0
  var O0 = e.defineComponent({ name: 'Lightning' })
  const Sl = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Fl = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z'
      },
      null,
      -1
    ),
    ql = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z'
      },
      null,
      -1
    )
  function Dl(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Sl, [Fl, ql])
  }
  ;(O0.render = Dl), (O0.__file = 'packages/components/Lightning.vue')
  const yl = O0
  var I0 = e.defineComponent({ name: 'Loading' })
  const Pl = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Rl = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z'
      },
      null,
      -1
    )
  function Tl(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Pl, [Rl])
  }
  ;(I0.render = Tl), (I0.__file = 'packages/components/Loading.vue')
  const bl = I0
  var U0 = e.defineComponent({ name: 'Lollipop' })
  const Ol = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Il = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z'
      },
      null,
      -1
    )
  function Ul(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Ol, [Il])
  }
  ;(U0.render = Ul), (U0.__file = 'packages/components/Lollipop.vue')
  const Gl = U0
  var G0 = e.defineComponent({ name: 'LocationInformation' })
  const Wl = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    El = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z' },
      null,
      -1
    ),
    jl = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z'
      },
      null,
      -1
    ),
    Kl = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z'
      },
      null,
      -1
    )
  function Zl(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Wl, [El, jl, Kl])
  }
  ;(G0.render = Zl), (G0.__file = 'packages/components/LocationInformation.vue')
  const Ql = G0
  var W0 = e.defineComponent({ name: 'Lock' })
  const Jl = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Xl = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z'
      },
      null,
      -1
    ),
    Yl = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z'
      },
      null,
      -1
    )
  function e5(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Jl, [Xl, Yl])
  }
  ;(W0.render = e5), (W0.__file = 'packages/components/Lock.vue')
  const o5 = W0
  var E0 = e.defineComponent({ name: 'LocationFilled' })
  const t5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    n5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z'
      },
      null,
      -1
    )
  function r5(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', t5, [n5])
  }
  ;(E0.render = r5), (E0.__file = 'packages/components/LocationFilled.vue')
  const c5 = E0
  var j0 = e.defineComponent({ name: 'Magnet' })
  const a5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    s5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z'
      },
      null,
      -1
    )
  function l5(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', a5, [s5])
  }
  ;(j0.render = l5), (j0.__file = 'packages/components/Magnet.vue')
  const p5 = j0
  var K0 = e.defineComponent({ name: 'Male' })
  const i5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    d5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z'
      },
      null,
      -1
    ),
    $5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z'
      },
      null,
      -1
    ),
    h5 = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z' },
      null,
      -1
    )
  function _5(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', i5, [d5, $5, h5])
  }
  ;(K0.render = _5), (K0.__file = 'packages/components/Male.vue')
  const m5 = K0
  var Z0 = e.defineComponent({ name: 'Location' })
  const w5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    f5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z'
      },
      null,
      -1
    ),
    g5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z'
      },
      null,
      -1
    )
  function z5(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', w5, [f5, g5])
  }
  ;(Z0.render = z5), (Z0.__file = 'packages/components/Location.vue')
  const k5 = Z0
  var Q0 = e.defineComponent({ name: 'Menu' })
  const C5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    B5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z'
      },
      null,
      -1
    )
  function V5(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', C5, [B5])
  }
  ;(Q0.render = V5), (Q0.__file = 'packages/components/Menu.vue')
  const u5 = Q0
  var J0 = e.defineComponent({ name: 'MagicStick' })
  const x5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    v5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z'
      },
      null,
      -1
    )
  function H5(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', x5, [v5])
  }
  ;(J0.render = H5), (J0.__file = 'packages/components/MagicStick.vue')
  const M5 = J0
  var X0 = e.defineComponent({ name: 'MessageBox' })
  const N5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    L5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z'
      },
      null,
      -1
    )
  function A5(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', N5, [L5])
  }
  ;(X0.render = A5), (X0.__file = 'packages/components/MessageBox.vue')
  const S5 = X0
  var Y0 = e.defineComponent({ name: 'MapLocation' })
  const F5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    q5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z'
      },
      null,
      -1
    ),
    D5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z'
      },
      null,
      -1
    )
  function y5(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', F5, [q5, D5])
  }
  ;(Y0.render = y5), (Y0.__file = 'packages/components/MapLocation.vue')
  const P5 = Y0
  var e1 = e.defineComponent({ name: 'Mic' })
  const R5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    T5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z'
      },
      null,
      -1
    )
  function b5(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', R5, [T5])
  }
  ;(e1.render = b5), (e1.__file = 'packages/components/Mic.vue')
  const O5 = e1
  var o1 = e.defineComponent({ name: 'Message' })
  const I5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    U5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z'
      },
      null,
      -1
    ),
    G5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z'
      },
      null,
      -1
    )
  function W5(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', I5, [U5, G5])
  }
  ;(o1.render = W5), (o1.__file = 'packages/components/Message.vue')
  const E5 = o1
  var t1 = e.defineComponent({ name: 'Medal' })
  const j5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    K5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z'
      },
      null,
      -1
    ),
    Z5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z'
      },
      null,
      -1
    )
  function Q5(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', j5, [K5, Z5])
  }
  ;(t1.render = Q5), (t1.__file = 'packages/components/Medal.vue')
  const J5 = t1
  var n1 = e.defineComponent({ name: 'MilkTea' })
  const X5 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Y5 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z'
      },
      null,
      -1
    )
  function ep(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', X5, [Y5])
  }
  ;(n1.render = ep), (n1.__file = 'packages/components/MilkTea.vue')
  const op = n1
  var r1 = e.defineComponent({ name: 'Microphone' })
  const tp = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    np = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z'
      },
      null,
      -1
    )
  function rp(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', tp, [np])
  }
  ;(r1.render = rp), (r1.__file = 'packages/components/Microphone.vue')
  const cp = r1
  var c1 = e.defineComponent({ name: 'Minus' })
  const ap = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    sp = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z' },
      null,
      -1
    )
  function lp(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ap, [sp])
  }
  ;(c1.render = lp), (c1.__file = 'packages/components/Minus.vue')
  const pp = c1
  var a1 = e.defineComponent({ name: 'Money' })
  const ip = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    dp = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z'
      },
      null,
      -1
    ),
    $p = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z'
      },
      null,
      -1
    ),
    hp = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z'
      },
      null,
      -1
    )
  function _p(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ip, [dp, $p, hp])
  }
  ;(a1.render = _p), (a1.__file = 'packages/components/Money.vue')
  const mp = a1
  var s1 = e.defineComponent({ name: 'MoonNight' })
  const wp = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    fp = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z'
      },
      null,
      -1
    ),
    gp = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z'
      },
      null,
      -1
    )
  function zp(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', wp, [fp, gp])
  }
  ;(s1.render = zp), (s1.__file = 'packages/components/MoonNight.vue')
  const kp = s1
  var l1 = e.defineComponent({ name: 'Monitor' })
  const Cp = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Bp = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z'
      },
      null,
      -1
    )
  function Vp(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Cp, [Bp])
  }
  ;(l1.render = Vp), (l1.__file = 'packages/components/Monitor.vue')
  const up = l1
  var p1 = e.defineComponent({ name: 'Moon' })
  const xp = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    vp = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z'
      },
      null,
      -1
    )
  function Hp(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', xp, [vp])
  }
  ;(p1.render = Hp), (p1.__file = 'packages/components/Moon.vue')
  const Mp = p1
  var i1 = e.defineComponent({ name: 'More' })
  const Np = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Lp = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z'
      },
      null,
      -1
    )
  function Ap(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Np, [Lp])
  }
  ;(i1.render = Ap), (i1.__file = 'packages/components/More.vue')
  const Sp = i1
  var d1 = e.defineComponent({ name: 'MostlyCloudy' })
  const Fp = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    qp = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z'
      },
      null,
      -1
    )
  function Dp(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Fp, [qp])
  }
  ;(d1.render = Dp), (d1.__file = 'packages/components/MostlyCloudy.vue')
  const yp = d1
  var $1 = e.defineComponent({ name: 'MoreFilled' })
  const Pp = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Rp = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z'
      },
      null,
      -1
    )
  function Tp(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Pp, [Rp])
  }
  ;($1.render = Tp), ($1.__file = 'packages/components/MoreFilled.vue')
  const bp = $1
  var h1 = e.defineComponent({ name: 'Mouse' })
  const Op = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ip = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z'
      },
      null,
      -1
    ),
    Up = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32zm32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96v64z'
      },
      null,
      -1
    )
  function Gp(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Op, [Ip, Up])
  }
  ;(h1.render = Gp), (h1.__file = 'packages/components/Mouse.vue')
  const Wp = h1
  var _1 = e.defineComponent({ name: 'Mug' })
  const Ep = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    jp = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z'
      },
      null,
      -1
    )
  function Kp(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Ep, [jp])
  }
  ;(_1.render = Kp), (_1.__file = 'packages/components/Mug.vue')
  const Zp = _1
  var m1 = e.defineComponent({ name: 'Mute' })
  const Qp = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Jp = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z'
      },
      null,
      -1
    ),
    Xp = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z'
      },
      null,
      -1
    )
  function Yp(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Qp, [Jp, Xp])
  }
  ;(m1.render = Yp), (m1.__file = 'packages/components/Mute.vue')
  const e9 = m1
  var w1 = e.defineComponent({ name: 'NoSmoking' })
  const o9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    t9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z'
      },
      null,
      -1
    )
  function n9(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', o9, [t9])
  }
  ;(w1.render = n9), (w1.__file = 'packages/components/NoSmoking.vue')
  const r9 = w1
  var f1 = e.defineComponent({ name: 'MuteNotification' })
  const c9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    a9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z'
      },
      null,
      -1
    ),
    s9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z'
      },
      null,
      -1
    )
  function l9(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', c9, [a9, s9])
  }
  ;(f1.render = l9), (f1.__file = 'packages/components/MuteNotification.vue')
  const p9 = f1
  var g1 = e.defineComponent({ name: 'Notification' })
  const i9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    d9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z'
      },
      null,
      -1
    ),
    $9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z'
      },
      null,
      -1
    )
  function h9(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', i9, [d9, $9])
  }
  ;(g1.render = h9), (g1.__file = 'packages/components/Notification.vue')
  const _9 = g1
  var z1 = e.defineComponent({ name: 'Notebook' })
  const m9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    w9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z'
      },
      null,
      -1
    ),
    f9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z'
      },
      null,
      -1
    )
  function g9(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', m9, [w9, f9])
  }
  ;(z1.render = g9), (z1.__file = 'packages/components/Notebook.vue')
  const z9 = z1
  var k1 = e.defineComponent({ name: 'Odometer' })
  const k9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    C9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z'
      },
      null,
      -1
    ),
    B9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z'
      },
      null,
      -1
    ),
    V9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z'
      },
      null,
      -1
    )
  function u9(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', k9, [C9, B9, V9])
  }
  ;(k1.render = u9), (k1.__file = 'packages/components/Odometer.vue')
  const x9 = k1
  var C1 = e.defineComponent({ name: 'OfficeBuilding' })
  const v9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    H9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z'
      },
      null,
      -1
    ),
    M9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z'
      },
      null,
      -1
    ),
    N9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z'
      },
      null,
      -1
    )
  function L9(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', v9, [H9, M9, N9])
  }
  ;(C1.render = L9), (C1.__file = 'packages/components/OfficeBuilding.vue')
  const A9 = C1
  var B1 = e.defineComponent({ name: 'Operation' })
  const S9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    F9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z'
      },
      null,
      -1
    )
  function q9(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', S9, [F9])
  }
  ;(B1.render = q9), (B1.__file = 'packages/components/Operation.vue')
  const D9 = B1
  var V1 = e.defineComponent({ name: 'Opportunity' })
  const y9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    P9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z'
      },
      null,
      -1
    )
  function R9(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', y9, [P9])
  }
  ;(V1.render = R9), (V1.__file = 'packages/components/Opportunity.vue')
  const T9 = V1
  var u1 = e.defineComponent({ name: 'Orange' })
  const b9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    O9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696l182.912-182.976zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696V129.344zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024L218.752 264.064zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544H129.344zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696L264.064 805.248zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128z'
      },
      null,
      -1
    )
  function I9(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', b9, [O9])
  }
  ;(u1.render = I9), (u1.__file = 'packages/components/Orange.vue')
  const U9 = u1
  var x1 = e.defineComponent({ name: 'Open' })
  const G9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    W9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z'
      },
      null,
      -1
    ),
    E9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z'
      },
      null,
      -1
    )
  function j9(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', G9, [W9, E9])
  }
  ;(x1.render = j9), (x1.__file = 'packages/components/Open.vue')
  const K9 = x1
  var v1 = e.defineComponent({ name: 'Paperclip' })
  const Z9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Q9 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z'
      },
      null,
      -1
    )
  function J9(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Z9, [Q9])
  }
  ;(v1.render = J9), (v1.__file = 'packages/components/Paperclip.vue')
  const X9 = v1
  var H1 = e.defineComponent({ name: 'Pear' })
  const Y9 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ei = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z'
      },
      null,
      -1
    )
  function oi(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Y9, [ei])
  }
  ;(H1.render = oi), (H1.__file = 'packages/components/Pear.vue')
  const ti = H1
  var M1 = e.defineComponent({ name: 'PartlyCloudy' })
  const ni = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ri = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z'
      },
      null,
      -1
    ),
    ci = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z'
      },
      null,
      -1
    )
  function ai(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ni, [ri, ci])
  }
  ;(M1.render = ai), (M1.__file = 'packages/components/PartlyCloudy.vue')
  const si = M1
  var N1 = e.defineComponent({ name: 'Phone' })
  const li = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    pi = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z'
      },
      null,
      -1
    )
  function ii(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', li, [pi])
  }
  ;(N1.render = ii), (N1.__file = 'packages/components/Phone.vue')
  const di = N1
  var L1 = e.defineComponent({ name: 'PictureFilled' })
  const $i = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    hi = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z'
      },
      null,
      -1
    )
  function _i(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', $i, [hi])
  }
  ;(L1.render = _i), (L1.__file = 'packages/components/PictureFilled.vue')
  const mi = L1
  var A1 = e.defineComponent({ name: 'PhoneFilled' })
  const wi = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    fi = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z'
      },
      null,
      -1
    )
  function gi(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', wi, [fi])
  }
  ;(A1.render = gi), (A1.__file = 'packages/components/PhoneFilled.vue')
  const zi = A1
  var S1 = e.defineComponent({ name: 'PictureRounded' })
  const ki = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ci = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z'
      },
      null,
      -1
    ),
    Bi = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z'
      },
      null,
      -1
    )
  function Vi(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ki, [Ci, Bi])
  }
  ;(S1.render = Vi), (S1.__file = 'packages/components/PictureRounded.vue')
  const ui = S1
  var F1 = e.defineComponent({ name: 'Guide' })
  const xi = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    vi = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z'
      },
      null,
      -1
    ),
    Hi = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z'
      },
      null,
      -1
    )
  function Mi(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', xi, [vi, Hi])
  }
  ;(F1.render = Mi), (F1.__file = 'packages/components/Guide.vue')
  const Ni = F1
  var q1 = e.defineComponent({ name: 'Place' })
  const Li = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ai = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z'
      },
      null,
      -1
    ),
    Si = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z'
      },
      null,
      -1
    ),
    Fi = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z'
      },
      null,
      -1
    )
  function qi(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Li, [Ai, Si, Fi])
  }
  ;(q1.render = qi), (q1.__file = 'packages/components/Place.vue')
  const Di = q1
  var D1 = e.defineComponent({ name: 'Platform' })
  const yi = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Pi = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z'
      },
      null,
      -1
    )
  function Ri(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', yi, [Pi])
  }
  ;(D1.render = Ri), (D1.__file = 'packages/components/Platform.vue')
  const Ti = D1
  var y1 = e.defineComponent({ name: 'PieChart' })
  const bi = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Oi = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z'
      },
      null,
      -1
    ),
    Ii = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z'
      },
      null,
      -1
    )
  function Ui(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', bi, [Oi, Ii])
  }
  ;(y1.render = Ui), (y1.__file = 'packages/components/PieChart.vue')
  const Gi = y1
  var P1 = e.defineComponent({ name: 'Pointer' })
  const Wi = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ei = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32L359.04 556.8z'
      },
      null,
      -1
    )
  function ji(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Wi, [Ei])
  }
  ;(P1.render = ji), (P1.__file = 'packages/components/Pointer.vue')
  const Ki = P1
  var R1 = e.defineComponent({ name: 'Plus' })
  const Zi = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Qi = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z'
      },
      null,
      -1
    )
  function Ji(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Zi, [Qi])
  }
  ;(R1.render = Ji), (R1.__file = 'packages/components/Plus.vue')
  const Xi = R1
  var T1 = e.defineComponent({ name: 'Position' })
  const Yi = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ed = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z'
      },
      null,
      -1
    )
  function od(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Yi, [ed])
  }
  ;(T1.render = od), (T1.__file = 'packages/components/Position.vue')
  const td = T1
  var b1 = e.defineComponent({ name: 'Postcard' })
  const nd = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    rd = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z'
      },
      null,
      -1
    ),
    cd = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z'
      },
      null,
      -1
    )
  function ad(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', nd, [rd, cd])
  }
  ;(b1.render = ad), (b1.__file = 'packages/components/Postcard.vue')
  const sd = b1
  var O1 = e.defineComponent({ name: 'Present' })
  const ld = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    pd = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z'
      },
      null,
      -1
    ),
    id = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z' },
      null,
      -1
    ),
    dd = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z'
      },
      null,
      -1
    ),
    $d = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z'
      },
      null,
      -1
    )
  function hd(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ld, [pd, id, dd, $d])
  }
  ;(O1.render = hd), (O1.__file = 'packages/components/Present.vue')
  const _d = O1
  var I1 = e.defineComponent({ name: 'PriceTag' })
  const md = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    wd = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z'
      },
      null,
      -1
    ),
    fd = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z'
      },
      null,
      -1
    )
  function gd(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', md, [wd, fd])
  }
  ;(I1.render = gd), (I1.__file = 'packages/components/PriceTag.vue')
  const zd = I1
  var U1 = e.defineComponent({ name: 'Promotion' })
  const kd = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Cd = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z'
      },
      null,
      -1
    )
  function Bd(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', kd, [Cd])
  }
  ;(U1.render = Bd), (U1.__file = 'packages/components/Promotion.vue')
  const Vd = U1
  var G1 = e.defineComponent({ name: 'Pouring' })
  const ud = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    xd = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z'
      },
      null,
      -1
    )
  function vd(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ud, [xd])
  }
  ;(G1.render = vd), (G1.__file = 'packages/components/Pouring.vue')
  const Hd = G1
  var W1 = e.defineComponent({ name: 'ReadingLamp' })
  const Md = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Nd = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z'
      },
      null,
      -1
    ),
    Ld = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z'
      },
      null,
      -1
    )
  function Ad(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Md, [Nd, Ld])
  }
  ;(W1.render = Ad), (W1.__file = 'packages/components/ReadingLamp.vue')
  const Sd = W1
  var E1 = e.defineComponent({ name: 'QuestionFilled' })
  const Fd = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    qd = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z'
      },
      null,
      -1
    )
  function Dd(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Fd, [qd])
  }
  ;(E1.render = Dd), (E1.__file = 'packages/components/QuestionFilled.vue')
  const yd = E1
  var j1 = e.defineComponent({ name: 'Printer' })
  const Pd = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Rd = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z'
      },
      null,
      -1
    )
  function Td(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Pd, [Rd])
  }
  ;(j1.render = Td), (j1.__file = 'packages/components/Printer.vue')
  const bd = j1
  var K1 = e.defineComponent({ name: 'Picture' })
  const Od = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Id = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z'
      },
      null,
      -1
    ),
    Ud = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z'
      },
      null,
      -1
    )
  function Gd(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Od, [Id, Ud])
  }
  ;(K1.render = Gd), (K1.__file = 'packages/components/Picture.vue')
  const Wd = K1
  var Z1 = e.defineComponent({ name: 'RefreshRight' })
  const Ed = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    jd = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z'
      },
      null,
      -1
    )
  function Kd(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Ed, [jd])
  }
  ;(Z1.render = Kd), (Z1.__file = 'packages/components/RefreshRight.vue')
  const Zd = Z1
  var Q1 = e.defineComponent({ name: 'Reading' })
  const Qd = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Jd = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z'
      },
      null,
      -1
    ),
    Xd = e.createVNode('path', { fill: 'currentColor', d: 'M480 192h64v704h-64z' }, null, -1)
  function Yd(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Qd, [Jd, Xd])
  }
  ;(Q1.render = Yd), (Q1.__file = 'packages/components/Reading.vue')
  const e7 = Q1
  var J1 = e.defineComponent({ name: 'RefreshLeft' })
  const o7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    t7 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z'
      },
      null,
      -1
    )
  function n7(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', o7, [t7])
  }
  ;(J1.render = n7), (J1.__file = 'packages/components/RefreshLeft.vue')
  const r7 = J1
  var X1 = e.defineComponent({ name: 'Refresh' })
  const c7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    a7 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z'
      },
      null,
      -1
    )
  function s7(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', c7, [a7])
  }
  ;(X1.render = s7), (X1.__file = 'packages/components/Refresh.vue')
  const l7 = X1
  var Y1 = e.defineComponent({ name: 'Refrigerator' })
  const p7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    i7 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z'
      },
      null,
      -1
    )
  function d7(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', p7, [i7])
  }
  ;(Y1.render = d7), (Y1.__file = 'packages/components/Refrigerator.vue')
  const $7 = Y1
  var e4 = e.defineComponent({ name: 'RemoveFilled' })
  const h7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    _7 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z'
      },
      null,
      -1
    )
  function m7(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', h7, [_7])
  }
  ;(e4.render = m7), (e4.__file = 'packages/components/RemoveFilled.vue')
  const w7 = e4
  var o4 = e.defineComponent({ name: 'Right' })
  const f7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    g7 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z'
      },
      null,
      -1
    )
  function z7(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', f7, [g7])
  }
  ;(o4.render = z7), (o4.__file = 'packages/components/Right.vue')
  const k7 = o4
  var t4 = e.defineComponent({ name: 'ScaleToOriginal' })
  const C7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    B7 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z'
      },
      null,
      -1
    )
  function V7(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', C7, [B7])
  }
  ;(t4.render = V7), (t4.__file = 'packages/components/ScaleToOriginal.vue')
  const u7 = t4
  var n4 = e.defineComponent({ name: 'School' })
  const x7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    v7 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z'
      },
      null,
      -1
    ),
    H7 = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M64 832h896v64H64zm256-640h128v96H320z' },
      null,
      -1
    ),
    M7 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z'
      },
      null,
      -1
    )
  function N7(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', x7, [v7, H7, M7])
  }
  ;(n4.render = N7), (n4.__file = 'packages/components/School.vue')
  const L7 = n4
  var r4 = e.defineComponent({ name: 'Remove' })
  const A7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    S7 = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z' },
      null,
      -1
    ),
    F7 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z'
      },
      null,
      -1
    )
  function q7(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', A7, [S7, F7])
  }
  ;(r4.render = q7), (r4.__file = 'packages/components/Remove.vue')
  const D7 = r4
  var c4 = e.defineComponent({ name: 'Scissor' })
  const y7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    P7 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248z'
      },
      null,
      -1
    )
  function R7(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', y7, [P7])
  }
  ;(c4.render = R7), (c4.__file = 'packages/components/Scissor.vue')
  const T7 = c4
  var a4 = e.defineComponent({ name: 'Select' })
  const b7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    O7 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z'
      },
      null,
      -1
    )
  function I7(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', b7, [O7])
  }
  ;(a4.render = I7), (a4.__file = 'packages/components/Select.vue')
  const U7 = a4
  var s4 = e.defineComponent({ name: 'Management' })
  const G7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    W7 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z'
      },
      null,
      -1
    )
  function E7(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', G7, [W7])
  }
  ;(s4.render = E7), (s4.__file = 'packages/components/Management.vue')
  const j7 = s4
  var l4 = e.defineComponent({ name: 'Search' })
  const K7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Z7 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z'
      },
      null,
      -1
    )
  function Q7(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', K7, [Z7])
  }
  ;(l4.render = Q7), (l4.__file = 'packages/components/Search.vue')
  const J7 = l4
  var p4 = e.defineComponent({ name: 'Sell' })
  const X7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Y7 = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z'
      },
      null,
      -1
    )
  function e$(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', X7, [Y7])
  }
  ;(p4.render = e$), (p4.__file = 'packages/components/Sell.vue')
  const o$ = p4
  var i4 = e.defineComponent({ name: 'SemiSelect' })
  const t$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    n$ = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z' },
      null,
      -1
    )
  function r$(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', t$, [n$])
  }
  ;(i4.render = r$), (i4.__file = 'packages/components/SemiSelect.vue')
  const c$ = i4
  var d4 = e.defineComponent({ name: 'Share' })
  const a$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    s$ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z'
      },
      null,
      -1
    )
  function l$(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', a$, [s$])
  }
  ;(d4.render = l$), (d4.__file = 'packages/components/Share.vue')
  const p$ = d4
  var $4 = e.defineComponent({ name: 'Setting' })
  const i$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    d$ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z'
      },
      null,
      -1
    )
  function $$(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', i$, [d$])
  }
  ;($4.render = $$), ($4.__file = 'packages/components/Setting.vue')
  const h$ = $4
  var h4 = e.defineComponent({ name: 'Service' })
  const _$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    m$ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z'
      },
      null,
      -1
    )
  function w$(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', _$, [m$])
  }
  ;(h4.render = w$), (h4.__file = 'packages/components/Service.vue')
  const f$ = h4
  var _4 = e.defineComponent({ name: 'Ship' })
  const g$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    z$ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216L512 386.88zm0-70.272 144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408z'
      },
      null,
      -1
    )
  function k$(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', g$, [z$])
  }
  ;(_4.render = k$), (_4.__file = 'packages/components/Ship.vue')
  const C$ = _4
  var m4 = e.defineComponent({ name: 'SetUp' })
  const B$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    V$ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z'
      },
      null,
      -1
    ),
    u$ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z'
      },
      null,
      -1
    ),
    x$ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z'
      },
      null,
      -1
    ),
    v$ = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z' },
      null,
      -1
    )
  function H$(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', B$, [V$, u$, x$, v$])
  }
  ;(m4.render = H$), (m4.__file = 'packages/components/SetUp.vue')
  const M$ = m4
  var w4 = e.defineComponent({ name: 'ShoppingBag' })
  const N$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    L$ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z'
      },
      null,
      -1
    ),
    A$ = e.createVNode('path', { fill: 'currentColor', d: 'M192 704h640v64H192z' }, null, -1)
  function S$(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', N$, [L$, A$])
  }
  ;(w4.render = S$), (w4.__file = 'packages/components/ShoppingBag.vue')
  const F$ = w4
  var f4 = e.defineComponent({ name: 'Shop' })
  const q$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    D$ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z'
      },
      null,
      -1
    )
  function y$(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', q$, [D$])
  }
  ;(f4.render = y$), (f4.__file = 'packages/components/Shop.vue')
  const P$ = f4
  var g4 = e.defineComponent({ name: 'ShoppingCart' })
  const R$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    T$ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z'
      },
      null,
      -1
    )
  function b$(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', R$, [T$])
  }
  ;(g4.render = b$), (g4.__file = 'packages/components/ShoppingCart.vue')
  const O$ = g4
  var z4 = e.defineComponent({ name: 'ShoppingCartFull' })
  const I$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    U$ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z'
      },
      null,
      -1
    ),
    G$ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04z'
      },
      null,
      -1
    )
  function W$(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', I$, [U$, G$])
  }
  ;(z4.render = W$), (z4.__file = 'packages/components/ShoppingCartFull.vue')
  const E$ = z4
  var k4 = e.defineComponent({ name: 'Soccer' })
  const j$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    K$ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z'
      },
      null,
      -1
    )
  function Z$(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', j$, [K$])
  }
  ;(k4.render = Z$), (k4.__file = 'packages/components/Soccer.vue')
  const Q$ = k4
  var C4 = e.defineComponent({ name: 'SoldOut' })
  const J$ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    X$ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z'
      },
      null,
      -1
    )
  function Y$(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', J$, [X$])
  }
  ;(C4.render = Y$), (C4.__file = 'packages/components/SoldOut.vue')
  const eh = C4
  var B4 = e.defineComponent({ name: 'Smoking' })
  const oh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    th = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z'
      },
      null,
      -1
    ),
    nh = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z'
      },
      null,
      -1
    )
  function rh(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', oh, [th, nh])
  }
  ;(B4.render = rh), (B4.__file = 'packages/components/Smoking.vue')
  const ch = B4
  var V4 = e.defineComponent({ name: 'SortDown' })
  const ah = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    sh = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z'
      },
      null,
      -1
    )
  function lh(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ah, [sh])
  }
  ;(V4.render = lh), (V4.__file = 'packages/components/SortDown.vue')
  const ph = V4
  var u4 = e.defineComponent({ name: 'Sort' })
  const ih = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    dh = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z'
      },
      null,
      -1
    )
  function $h(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ih, [dh])
  }
  ;(u4.render = $h), (u4.__file = 'packages/components/Sort.vue')
  const hh = u4
  var x4 = e.defineComponent({ name: 'SortUp' })
  const _h = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    mh = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z'
      },
      null,
      -1
    )
  function wh(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', _h, [mh])
  }
  ;(x4.render = wh), (x4.__file = 'packages/components/SortUp.vue')
  const fh = x4
  var v4 = e.defineComponent({ name: 'Star' })
  const gh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    zh = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z'
      },
      null,
      -1
    )
  function kh(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', gh, [zh])
  }
  ;(v4.render = kh), (v4.__file = 'packages/components/Star.vue')
  const Ch = v4
  var H4 = e.defineComponent({ name: 'Stamp' })
  const Bh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Vh = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z'
      },
      null,
      -1
    )
  function uh(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Bh, [Vh])
  }
  ;(H4.render = uh), (H4.__file = 'packages/components/Stamp.vue')
  const xh = H4
  var M4 = e.defineComponent({ name: 'StarFilled' })
  const vh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Hh = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z'
      },
      null,
      -1
    )
  function Mh(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', vh, [Hh])
  }
  ;(M4.render = Mh), (M4.__file = 'packages/components/StarFilled.vue')
  const Nh = M4
  var N4 = e.defineComponent({ name: 'Stopwatch' })
  const Lh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Ah = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z'
      },
      null,
      -1
    ),
    Sh = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z'
      },
      null,
      -1
    )
  function Fh(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Lh, [Ah, Sh])
  }
  ;(N4.render = Fh), (N4.__file = 'packages/components/Stopwatch.vue')
  const qh = N4
  var L4 = e.defineComponent({ name: 'SuccessFilled' })
  const Dh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    yh = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z'
      },
      null,
      -1
    )
  function Ph(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Dh, [yh])
  }
  ;(L4.render = Ph), (L4.__file = 'packages/components/SuccessFilled.vue')
  const Rh = L4
  var A4 = e.defineComponent({ name: 'Suitcase' })
  const Th = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    bh = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z'
      },
      null,
      -1
    ),
    Oh = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z'
      },
      null,
      -1
    )
  function Ih(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Th, [bh, Oh])
  }
  ;(A4.render = Ih), (A4.__file = 'packages/components/Suitcase.vue')
  const Uh = A4
  var S4 = e.defineComponent({ name: 'Sugar' })
  const Gh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Wh = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z'
      },
      null,
      -1
    )
  function Eh(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Gh, [Wh])
  }
  ;(S4.render = Eh), (S4.__file = 'packages/components/Sugar.vue')
  const jh = S4
  var F4 = e.defineComponent({ name: 'Sunny' })
  const Kh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Zh = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z'
      },
      null,
      -1
    )
  function Qh(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Kh, [Zh])
  }
  ;(F4.render = Qh), (F4.__file = 'packages/components/Sunny.vue')
  const Jh = F4
  var q4 = e.defineComponent({ name: 'Sunrise' })
  const Xh = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Yh = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z'
      },
      null,
      -1
    )
  function e_(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Xh, [Yh])
  }
  ;(q4.render = e_), (q4.__file = 'packages/components/Sunrise.vue')
  const o_ = q4
  var D4 = e.defineComponent({ name: 'Switch' })
  const t_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    n_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z'
      },
      null,
      -1
    )
  function r_(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', t_, [n_])
  }
  ;(D4.render = r_), (D4.__file = 'packages/components/Switch.vue')
  const c_ = D4
  var y4 = e.defineComponent({ name: 'Ticket' })
  const a_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    s_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z'
      },
      null,
      -1
    )
  function l_(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', a_, [s_])
  }
  ;(y4.render = l_), (y4.__file = 'packages/components/Ticket.vue')
  const p_ = y4
  var P4 = e.defineComponent({ name: 'Sunset' })
  const i_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    d_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z'
      },
      null,
      -1
    )
  function $_(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', i_, [d_])
  }
  ;(P4.render = $_), (P4.__file = 'packages/components/Sunset.vue')
  const h_ = P4
  var R4 = e.defineComponent({ name: 'Tickets' })
  const __ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    m_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z'
      },
      null,
      -1
    )
  function w_(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', __, [m_])
  }
  ;(R4.render = w_), (R4.__file = 'packages/components/Tickets.vue')
  const f_ = R4
  var T4 = e.defineComponent({ name: 'SwitchButton' })
  const g_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    z_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z'
      },
      null,
      -1
    ),
    k_ = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z' },
      null,
      -1
    )
  function C_(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', g_, [z_, k_])
  }
  ;(T4.render = C_), (T4.__file = 'packages/components/SwitchButton.vue')
  const B_ = T4
  var b4 = e.defineComponent({ name: 'TakeawayBox' })
  const V_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    u_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z'
      },
      null,
      -1
    )
  function x_(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', V_, [u_])
  }
  ;(b4.render = x_), (b4.__file = 'packages/components/TakeawayBox.vue')
  const v_ = b4
  var O4 = e.defineComponent({ name: 'ToiletPaper' })
  const H_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    M_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z'
      },
      null,
      -1
    ),
    N_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z'
      },
      null,
      -1
    )
  function L_(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', H_, [M_, N_])
  }
  ;(O4.render = L_), (O4.__file = 'packages/components/ToiletPaper.vue')
  const A_ = O4
  var I4 = e.defineComponent({ name: 'Timer' })
  const S_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    F_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z'
      },
      null,
      -1
    ),
    q_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z'
      },
      null,
      -1
    ),
    D_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z'
      },
      null,
      -1
    )
  function y_(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', S_, [F_, q_, D_])
  }
  ;(I4.render = y_), (I4.__file = 'packages/components/Timer.vue')
  const P_ = I4
  var U4 = e.defineComponent({ name: 'Tools' })
  const R_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    T_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z'
      },
      null,
      -1
    )
  function b_(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', R_, [T_])
  }
  ;(U4.render = b_), (U4.__file = 'packages/components/Tools.vue')
  const O_ = U4
  var G4 = e.defineComponent({ name: 'TopLeft' })
  const I_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    U_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z'
      },
      null,
      -1
    ),
    G_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z'
      },
      null,
      -1
    )
  function W_(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', I_, [U_, G_])
  }
  ;(G4.render = W_), (G4.__file = 'packages/components/TopLeft.vue')
  const E_ = G4
  var W4 = e.defineComponent({ name: 'Top' })
  const j_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    K_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z'
      },
      null,
      -1
    )
  function Z_(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', j_, [K_])
  }
  ;(W4.render = Z_), (W4.__file = 'packages/components/Top.vue')
  const Q_ = W4
  var E4 = e.defineComponent({ name: 'TopRight' })
  const J_ = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    X_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z'
      },
      null,
      -1
    ),
    Y_ = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z'
      },
      null,
      -1
    )
  function em(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', J_, [X_, Y_])
  }
  ;(E4.render = em), (E4.__file = 'packages/components/TopRight.vue')
  const om = E4
  var j4 = e.defineComponent({ name: 'TrendCharts' })
  const tm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    nm = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z'
      },
      null,
      -1
    )
  function rm(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', tm, [nm])
  }
  ;(j4.render = rm), (j4.__file = 'packages/components/TrendCharts.vue')
  const cm = j4
  var K4 = e.defineComponent({ name: 'TurnOff' })
  const am = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    sm = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z'
      },
      null,
      -1
    ),
    lm = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z'
      },
      null,
      -1
    )
  function pm(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', am, [sm, lm])
  }
  ;(K4.render = pm), (K4.__file = 'packages/components/TurnOff.vue')
  const im = K4
  var Z4 = e.defineComponent({ name: 'Unlock' })
  const dm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    $m = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z'
      },
      null,
      -1
    ),
    hm = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z'
      },
      null,
      -1
    )
  function _m(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', dm, [$m, hm])
  }
  ;(Z4.render = _m), (Z4.__file = 'packages/components/Unlock.vue')
  const mm = Z4
  var Q4 = e.defineComponent({ name: 'Trophy' })
  const wm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    fm = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64h128zm224-448V128H320v320a192 192 0 1 0 384 0zm64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448H256z'
      },
      null,
      -1
    )
  function gm(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', wm, [fm])
  }
  ;(Q4.render = gm), (Q4.__file = 'packages/components/Trophy.vue')
  const zm = Q4
  var J4 = e.defineComponent({ name: 'Umbrella' })
  const km = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Cm = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z'
      },
      null,
      -1
    )
  function Bm(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', km, [Cm])
  }
  ;(J4.render = Bm), (J4.__file = 'packages/components/Umbrella.vue')
  const Vm = J4
  var X4 = e.defineComponent({ name: 'UploadFilled' })
  const um = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    xm = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z'
      },
      null,
      -1
    )
  function vm(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', um, [xm])
  }
  ;(X4.render = vm), (X4.__file = 'packages/components/UploadFilled.vue')
  const Hm = X4
  var Y4 = e.defineComponent({ name: 'UserFilled' })
  const Mm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Nm = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z'
      },
      null,
      -1
    )
  function Lm(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Mm, [Nm])
  }
  ;(Y4.render = Lm), (Y4.__file = 'packages/components/UserFilled.vue')
  const Am = Y4
  var e6 = e.defineComponent({ name: 'Upload' })
  const Sm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Fm = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z'
      },
      null,
      -1
    )
  function qm(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Sm, [Fm])
  }
  ;(e6.render = qm), (e6.__file = 'packages/components/Upload.vue')
  const Dm = e6
  var o6 = e.defineComponent({ name: 'User' })
  const ym = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Pm = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z'
      },
      null,
      -1
    )
  function Rm(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', ym, [Pm])
  }
  ;(o6.render = Rm), (o6.__file = 'packages/components/User.vue')
  const Tm = o6
  var t6 = e.defineComponent({ name: 'Van' })
  const bm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Om = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z'
      },
      null,
      -1
    )
  function Im(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', bm, [Om])
  }
  ;(t6.render = Im), (t6.__file = 'packages/components/Van.vue')
  const Um = t6
  var n6 = e.defineComponent({ name: 'CopyDocument' })
  const Gm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Wm = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z'
      },
      null,
      -1
    ),
    Em = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z'
      },
      null,
      -1
    )
  function jm(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Gm, [Wm, Em])
  }
  ;(n6.render = jm), (n6.__file = 'packages/components/CopyDocument.vue')
  const Km = n6
  var r6 = e.defineComponent({ name: 'VideoPause' })
  const Zm = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Qm = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z'
      },
      null,
      -1
    )
  function Jm(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Zm, [Qm])
  }
  ;(r6.render = Jm), (r6.__file = 'packages/components/VideoPause.vue')
  const Xm = r6
  var c6 = e.defineComponent({ name: 'VideoCameraFilled' })
  const Ym = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    ew = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z'
      },
      null,
      -1
    )
  function ow(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Ym, [ew])
  }
  ;(c6.render = ow), (c6.__file = 'packages/components/VideoCameraFilled.vue')
  const tw = c6
  var a6 = e.defineComponent({ name: 'View' })
  const nw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    rw = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z'
      },
      null,
      -1
    )
  function cw(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', nw, [rw])
  }
  ;(a6.render = cw), (a6.__file = 'packages/components/View.vue')
  const aw = a6
  var s6 = e.defineComponent({ name: 'Wallet' })
  const sw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    lw = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z'
      },
      null,
      -1
    ),
    pw = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z'
      },
      null,
      -1
    ),
    iw = e.createVNode(
      'path',
      { fill: 'currentColor', d: 'M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z' },
      null,
      -1
    )
  function dw(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', sw, [lw, pw, iw])
  }
  ;(s6.render = dw), (s6.__file = 'packages/components/Wallet.vue')
  const $w = s6
  var l6 = e.defineComponent({ name: 'WarningFilled' })
  const hw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    _w = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z'
      },
      null,
      -1
    )
  function mw(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', hw, [_w])
  }
  ;(l6.render = mw), (l6.__file = 'packages/components/WarningFilled.vue')
  const ww = l6
  var p6 = e.defineComponent({ name: 'Watch' })
  const fw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    gw = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z'
      },
      null,
      -1
    ),
    zw = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z'
      },
      null,
      -1
    ),
    kw = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z'
      },
      null,
      -1
    )
  function Cw(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', fw, [gw, zw, kw])
  }
  ;(p6.render = Cw), (p6.__file = 'packages/components/Watch.vue')
  const Bw = p6
  var i6 = e.defineComponent({ name: 'VideoPlay' })
  const Vw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    uw = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z'
      },
      null,
      -1
    )
  function xw(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Vw, [uw])
  }
  ;(i6.render = xw), (i6.__file = 'packages/components/VideoPlay.vue')
  const vw = i6
  var d6 = e.defineComponent({ name: 'Watermelon' })
  const Hw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Mw = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z'
      },
      null,
      -1
    )
  function Nw(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Hw, [Mw])
  }
  ;(d6.render = Nw), (d6.__file = 'packages/components/Watermelon.vue')
  const Lw = d6
  var $6 = e.defineComponent({ name: 'VideoCamera' })
  const Aw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Sw = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z'
      },
      null,
      -1
    )
  function Fw(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Aw, [Sw])
  }
  ;($6.render = Fw), ($6.__file = 'packages/components/VideoCamera.vue')
  const qw = $6
  var h6 = e.defineComponent({ name: 'WalletFilled' })
  const Dw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    yw = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z'
      },
      null,
      -1
    )
  function Pw(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Dw, [yw])
  }
  ;(h6.render = Pw), (h6.__file = 'packages/components/WalletFilled.vue')
  const Rw = h6
  var _6 = e.defineComponent({ name: 'Warning' })
  const Tw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    bw = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z'
      },
      null,
      -1
    )
  function Ow(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Tw, [bw])
  }
  ;(_6.render = Ow), (_6.__file = 'packages/components/Warning.vue')
  const Iw = _6
  var m6 = e.defineComponent({ name: 'List' })
  const Uw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Gw = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z'
      },
      null,
      -1
    )
  function Ww(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Uw, [Gw])
  }
  ;(m6.render = Ww), (m6.__file = 'packages/components/List.vue')
  const Ew = m6
  var w6 = e.defineComponent({ name: 'ZoomIn' })
  const jw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Kw = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z'
      },
      null,
      -1
    )
  function Zw(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', jw, [Kw])
  }
  ;(w6.render = Zw), (w6.__file = 'packages/components/ZoomIn.vue')
  const Qw = w6
  var f6 = e.defineComponent({ name: 'ZoomOut' })
  const Jw = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    Xw = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z'
      },
      null,
      -1
    )
  function Yw(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', Jw, [Xw])
  }
  ;(f6.render = Yw), (f6.__file = 'packages/components/ZoomOut.vue')
  const ef = f6
  var g6 = e.defineComponent({ name: 'Rank' })
  const of = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    tf = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'm186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z'
      },
      null,
      -1
    )
  function nf(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', of, [tf])
  }
  ;(g6.render = nf), (g6.__file = 'packages/components/Rank.vue')
  const rf = g6
  var z6 = e.defineComponent({ name: 'WindPower' })
  const cf = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
    af = e.createVNode(
      'path',
      {
        fill: 'currentColor',
        d: 'M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z'
      },
      null,
      -1
    )
  function sf(o, a, r, c, n, t) {
    return e.openBlock(), e.createBlock('svg', cf, [af])
  }
  ;(z6.render = sf), (z6.__file = 'packages/components/WindPower.vue')
  const lf = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Aim: v6,
        AddLocation: S6,
        Apple: y6,
        AlarmClock: O6,
        ArrowDown: W6,
        ArrowDownBold: Z6,
        ArrowLeft: Y6,
        ArrowLeftBold: n3,
        ArrowRightBold: s3,
        ArrowUp: d3,
        Back: w3,
        Bell: B3,
        Baseball: H3,
        Bicycle: D3,
        BellFilled: T3,
        Basketball: U3,
        Bottom: j3,
        Box: Y3,
        Briefcase: ne,
        BrushFilled: se,
        Bowl: de,
        Avatar: me,
        Brush: ze,
        Burger: Ve,
        Camera: He,
        BottomLeft: Se,
        Calendar: ye,
        CaretBottom: be,
        CaretLeft: Ge,
        CaretRight: Ke,
        CaretTop: Xe,
        ChatDotSquare: no,
        Cellphone: so,
        ChatDotRound: ho,
        ChatLineSquare: go,
        ChatLineRound: Vo,
        ChatRound: Ho,
        Check: Ao,
        ChatSquare: Do,
        Cherry: To,
        Chicken: Uo,
        CircleCheckFilled: jo,
        CircleCheck: Xo,
        Checked: tt,
        CircleCloseFilled: at,
        CircleClose: dt,
        ArrowRight: mt,
        CirclePlus: Ct,
        Clock: Ht,
        CloseBold: At,
        Close: Dt,
        Cloudy: Tt,
        CirclePlusFilled: Ut,
        CoffeeCup: jt,
        ColdDrink: Jt,
        Coin: n8,
        ArrowUpBold: s8,
        CollectionTag: d8,
        BottomRight: w8,
        Coffee: k8,
        CameraFilled: u8,
        Collection: N8,
        Cpu: q8,
        Crop: T8,
        Coordinate: G8,
        DArrowLeft: K8,
        Compass: Y8,
        Connection: rn,
        CreditCard: pn,
        DataBoard: wn,
        DArrowRight: kn,
        Dessert: un,
        DeleteLocation: Ln,
        DCaret: qn,
        Delete: Rn,
        Dish: In,
        DishDot: En,
        DocumentCopy: Qn,
        Discount: or,
        DocumentChecked: cr,
        DocumentAdd: pr,
        DocumentRemove: hr,
        DataAnalysis: fr,
        DeleteFilled: Cr,
        Download: xr,
        Drizzling: Nr,
        Eleme: Fr,
        ElemeFilled: Pr,
        Edit: Ir,
        Failed: Er,
        Expand: Qr,
        Female: tc,
        Document: ac,
        Film: dc,
        Finished: mc,
        DataLine: zc,
        Filter: Vc,
        Flag: Hc,
        FolderChecked: Ac,
        FirstAidKit: yc,
        FolderAdd: bc,
        Fold: Gc,
        FolderDelete: Kc,
        DocumentDelete: Xc,
        Folder: ta,
        Food: aa,
        FolderOpened: ia,
        Football: ma,
        FolderRemove: za,
        Fries: Va,
        FullScreen: Ha,
        ForkSpoon: Aa,
        Goblet: Da,
        GobletFull: Ta,
        Goods: Ua,
        GobletSquareFull: ja,
        GoodsFilled: Ja,
        Grid: os,
        Grape: cs,
        GobletSquare: ps,
        Headset: hs,
        Comment: fs,
        HelpFilled: Cs,
        Histogram: xs,
        HomeFilled: Ns,
        Help: Fs,
        House: Ps,
        IceCreamRound: Os,
        HotWater: Ws,
        IceCream: Zs,
        Files: Ys,
        IceCreamSquare: nl,
        Key: sl,
        IceTea: dl,
        KnifeFork: ml,
        Iphone: zl,
        InfoFilled: Vl,
        Link: Hl,
        IceDrink: Al,
        Lightning: yl,
        Loading: bl,
        Lollipop: Gl,
        LocationInformation: Ql,
        Lock: o5,
        LocationFilled: c5,
        Magnet: p5,
        Male: m5,
        Location: k5,
        Menu: u5,
        MagicStick: M5,
        MessageBox: S5,
        MapLocation: P5,
        Mic: O5,
        Message: E5,
        Medal: J5,
        MilkTea: op,
        Microphone: cp,
        Minus: pp,
        Money: mp,
        MoonNight: kp,
        Monitor: up,
        Moon: Mp,
        More: Sp,
        MostlyCloudy: yp,
        MoreFilled: bp,
        Mouse: Wp,
        Mug: Zp,
        Mute: e9,
        NoSmoking: r9,
        MuteNotification: p9,
        Notification: _9,
        Notebook: z9,
        Odometer: x9,
        OfficeBuilding: A9,
        Operation: D9,
        Opportunity: T9,
        Orange: U9,
        Open: K9,
        Paperclip: X9,
        Pear: ti,
        PartlyCloudy: si,
        Phone: di,
        PictureFilled: mi,
        PhoneFilled: zi,
        PictureRounded: ui,
        Guide: Ni,
        Place: Di,
        Platform: Ti,
        PieChart: Gi,
        Pointer: Ki,
        Plus: Xi,
        Position: td,
        Postcard: sd,
        Present: _d,
        PriceTag: zd,
        Promotion: Vd,
        Pouring: Hd,
        ReadingLamp: Sd,
        QuestionFilled: yd,
        Printer: bd,
        Picture: Wd,
        RefreshRight: Zd,
        Reading: e7,
        RefreshLeft: r7,
        Refresh: l7,
        Refrigerator: $7,
        RemoveFilled: w7,
        Right: k7,
        ScaleToOriginal: u7,
        School: L7,
        Remove: D7,
        Scissor: T7,
        Select: U7,
        Management: j7,
        Search: J7,
        Sell: o$,
        SemiSelect: c$,
        Share: p$,
        Setting: h$,
        Service: f$,
        Ship: C$,
        SetUp: M$,
        ShoppingBag: F$,
        Shop: P$,
        ShoppingCart: O$,
        ShoppingCartFull: E$,
        Soccer: Q$,
        SoldOut: eh,
        Smoking: ch,
        SortDown: ph,
        Sort: hh,
        SortUp: fh,
        Star: Ch,
        Stamp: xh,
        StarFilled: Nh,
        Stopwatch: qh,
        SuccessFilled: Rh,
        Suitcase: Uh,
        Sugar: jh,
        Sunny: Jh,
        Sunrise: o_,
        Switch: c_,
        Ticket: p_,
        Sunset: h_,
        Tickets: f_,
        SwitchButton: B_,
        TakeawayBox: v_,
        ToiletPaper: A_,
        Timer: P_,
        Tools: O_,
        TopLeft: E_,
        Top: Q_,
        TopRight: om,
        TrendCharts: cm,
        TurnOff: im,
        Unlock: mm,
        Trophy: zm,
        Umbrella: Vm,
        UploadFilled: Hm,
        UserFilled: Am,
        Upload: Dm,
        User: Tm,
        Van: Um,
        CopyDocument: Km,
        VideoPause: Xm,
        VideoCameraFilled: tw,
        View: aw,
        Wallet: $w,
        WarningFilled: ww,
        Watch: Bw,
        VideoPlay: vw,
        Watermelon: Lw,
        VideoCamera: qw,
        WalletFilled: Rw,
        Warning: Iw,
        List: Ew,
        ZoomIn: Qw,
        ZoomOut: ef,
        Rank: rf,
        WindPower: z6
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
  function pf(o) {
    return (
      typeof o == 'function' ||
      (Object.prototype.toString.call(o) === '[object Object]' && !e.isVNode(o))
    )
  }
  const df = e.defineComponent({
    props: {
      data: { type: Array, required: !0 },
      defaultActive: { type: String, default: '' },
      router: { type: Boolean, default: !1 },
      name: { type: String, default: 'name' },
      index: { type: String, default: 'index' },
      icon: { type: String, default: 'icon' },
      children: { type: String, default: 'children' }
    },
    setup(o, a) {
      let r = n =>
          n.map(t => {
            t.i = lf[t.icon]
            let s = {
              title: () =>
                e.createVNode(e.Fragment, null, [
                  e.createVNode(t.i, { style: { marginRight: 4 } }, null),
                  e.createVNode('span', null, [t[o.name]])
                ])
            }
            return t[o.children] && t[o.children].length
              ? e.createVNode(
                  e.resolveComponent('el-sub-menu'),
                  { index: t[o.index] },
                  { default: () => [r(t[o.children])], ...s }
                )
              : e.createVNode(
                  e.resolveComponent('el-menu-item'),
                  { index: t[o.index] },
                  {
                    default: () => [
                      e.createVNode(t.i, null, null),
                      e.createVNode('span', null, [t[o.name]])
                    ]
                  }
                )
          }),
        c = e.useAttrs()
      return () => {
        let n
        return e.createVNode(
          e.resolveComponent('el-menu'),
          e.mergeProps(
            { class: 'menu-icon-svg', 'default-active': o.defaultActive, router: o.router },
            c
          ),
          pf((n = r(o.data))) ? n : { default: () => [n] }
        )
      }
    }
  })
  return {
    install(o) {
      o.component('lib-menu', C6), o.component('lib-infinite-menu', df)
    }
  }
})
