(this['webpackJsonpejercicio-2'] = this['webpackJsonpejercicio-2'] || []).push([
  [0],
  {
    12: function (e, t, a) {
      'use strict';
      a.r(t);
      var c = a(1),
        n = a(6),
        s = a.n(n),
        i = (a(4), a(2)),
        r = {
          getCharacters: function () {
            return fetch(
              '//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
            )
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return (
                  console.log(e),
                  e.results.map(function (e) {
                    return {
                      name: e.name,
                      species: e.species,
                      id: e.id,
                      image: e.image,
                      status: e.status,
                      planet: e.origin.name,
                    };
                  })
                );
              });
          },
        },
        l = (a(5), a(0)),
        o = function (e) {
          return Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)('img', {
                src: e.character.image,
                alt: 'personaje',
                className: 'main__form--section--list--item--image image',
              }),
              Object(l.jsx)('h2', {
                className: 'main__form--section--list--item--name name',
                alt: 'nombre',
                title: 'nombre',
                children: e.character.name,
              }),
              Object(l.jsx)('h3', {
                className: 'main__form--section--list--item--species species',
                alt: 'especie',
                title: 'especie',
                children: e.character.species,
              }),
            ],
          });
        },
        m = function (e) {
          var t = e.data.map(function (e) {
            return Object(l.jsx)(
              'li',
              {
                className: 'main__form--section--list--item item',
                children: Object(l.jsx)(o, { character: e }),
              },
              e.id
            );
          });
          return Object(l.jsx)('ul', {
            className: 'main__form--section--list list',
            children: t,
          });
        },
        h = function (e) {
          return Object(l.jsxs)('div', {
            className: 'main__form--container',
            children: [
              Object(l.jsx)('input', {
                type: 'text',
                placeholder: 'Search',
                className: 'main__form--container--text',
                value: e.searchName,
                onChange: e.handleSearchName,
              }),
              Object(l.jsx)('label', {
                className: 'main__form--container--label',
                children: 'Filter by species:',
              }),
              Object(l.jsxs)('select', {
                name: 'select',
                className: 'main__form--container--select',
                value: e.CharactersSearchpecies,
                onChange: e.handleCharactersSearchpecies,
                children: [
                  Object(l.jsx)('option', {
                    className: 'main__form--container--select--option',
                    value: 'All',
                    children: 'All',
                  }),
                  Object(l.jsx)('option', {
                    className: 'main__form--container--select--option',
                    value: 'Human',
                    children: 'Human',
                  }),
                  Object(l.jsx)('option', {
                    className: 'main__form--container--select--option',
                    value: 'Alien',
                    children: 'Alien',
                  }),
                ],
              }),
            ],
          });
        },
        j = function (e) {
          return Object(l.jsxs)('form', {
            className: 'main__form',
            children: [
              Object(l.jsx)(h, {
                searchName: e.searchName,
                handleSearchName: e.handleSearchName,
                CharactersSearchpecies: e.CharactersSearchpecies,
                handleCharactersSearchpecies: e.handleCharactersSearchpecies,
              }),
              Object(l.jsx)('section', {
                className: 'main__form--section',
                children: Object(l.jsx)(m, { data: e.data }),
              }),
            ],
          });
        };
      var u = function () {
        var e = Object(c.useState)([]),
          t = Object(i.a)(e, 2),
          a = t[0],
          n = t[1],
          s = Object(c.useState)(''),
          o = Object(i.a)(s, 2),
          u = o[0],
          d = o[1],
          b = Object(c.useState)('All'),
          f = Object(i.a)(b, 2),
          _ = f[0],
          p = f[1];
        Object(c.useEffect)(function () {
          r.getCharacters().then(function (e) {
            n(e), console.log(a);
          });
        }, []);
        var O = a
          .filter(function (e) {
            return 'All' === _ || e.species === _;
          })
          .filter(function (e) {
            return e.name.toLocaleLowerCase().includes(u.toLocaleLowerCase());
          });
        return Object(l.jsxs)(l.Fragment, {
          children: [
            Object(l.jsx)('header', {
              className: 'header',
              children: Object(l.jsx)('img', {
                className: 'header__img',
                src: 'https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png',
                alt: 'Rick and Morty',
              }),
            }),
            Object(l.jsx)('main', {
              className: 'main',
              children: Object(l.jsx)(j, {
                searchName: u,
                handleSearchName: function (e) {
                  d(e.currentTarget.value);
                },
                CharactersSearchpecies: _,
                handleCharactersSearchpecies: function (e) {
                  p(e.currentTarget.value);
                },
                CharactersList: m,
                CharactersSearch: h,
                data: O,
              }),
            }),
            Object(l.jsx)('footer', {
              className: 'footer',
              children: Object(l.jsx)('small', {
                className: 'footer__small',
                children: 'Claudia Stein para Adalab \xa9 2021',
              }),
            }),
          ],
        });
      };
      s.a.render(Object(l.jsx)(u, {}), document.getElementById('root'));
    },
    4: function (e, t, a) {},
    5: function (e, t, a) {},
  },
  [[12, 1, 2]],
]);
//# sourceMappingURL=main.39f466fb.chunk.js.map
