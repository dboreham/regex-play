
import { linkReplacer } from "./main"

test('Link is unchanged', () => {
    const testLink = "/foo"
    expect(linkReplacer(testLink)).toBe(testLink);
});
