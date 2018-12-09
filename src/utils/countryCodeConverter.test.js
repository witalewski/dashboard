import { iso2ToIso3 } from './countryCodeConverter';

describe('iso2ToIso3', () => {
  it('maps country iso 2 to iso 3 standard', () => {
    expect(iso2ToIso3('NL')).toEqual('NLD');
    expect(iso2ToIso3('AU')).toEqual('AUS');
    expect(iso2ToIso3('US')).toEqual('USA');
  });
});
