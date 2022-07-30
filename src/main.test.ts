
import { linkReplacer } from "./main"

test.each`
  original  | transformed
  ${'./foo.md'}                   | ${'./foo'}
  ${'./foo'}                      | ${'./foo'}
  ${'../foo.md'}                  | ${'../foo'}
  ${'../bar/foo.md'}              | ${'../bar/foo'}
  ${'/bar/foo.md'}                | ${'/bar/foo'}
  ${'/bar/foo.mdsomething'}       | ${'/bar/foo.mdsomething'}
  ${'./foo.md#anchor'}            | ${'./foo#anchor'}
  ${'../bar/foo.md#anchor'}       | ${'../bar/foo#anchor'}
  ${'./bar#anchor'}               | ${'./bar#anchor'}
  ${'http://host.com/foo/bar.md'} | ${'http://host.com/foo/bar.md'}
`('transforms $original to $transformed', ({ original, transformed }) => {
    expect(linkReplacer(original)).toBe(transformed)
});
