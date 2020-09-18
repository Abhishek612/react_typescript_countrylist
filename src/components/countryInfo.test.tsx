import React from 'react';
import { mount,shallow } from 'enzyme';
import CountryInfo  from './countryInfo'

describe('List tests', () => {
    let languages = [{name: "English", nativeName: "English"}]
    let currencies = [{code: "AUD", name: "Australian dollar", symbol: "$"}]
    let capital = 'Canberra';let population = 24117360;
   
test('countryInfo component renders properly', () => {   
    const wrapper = shallow(
        <CountryInfo capital={capital} currencies={currencies} languages = {languages} population={population} />
      );
    const label = wrapper.find('.capital');
    expect(label.text()).toBe('Canberra');

});

it('renders list-items properly', () => {
    const wrapper = shallow(
        <CountryInfo capital={capital} currencies={currencies} languages = {languages} population={population} />
      );

    expect( wrapper.find('.detail-1')).toBeDefined();
    expect(wrapper.find('.languages')).toHaveLength(languages.length);
  });

});