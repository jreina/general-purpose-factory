import { GeneralPurposeFactory, FixtureTypes } from '../src/index';
import { expect } from 'chai';

describe('ModelBuilder', function() {
  let factory: GeneralPurposeFactory;
  it('Should create a person object.', function() {
    factory = new GeneralPurposeFactory({
      first_name: { ValueType: FixtureTypes.Person.FirstName },
      last_name: { ValueType: FixtureTypes.Person.LastName }
    });

    const actual: any = factory.build();

    expect(actual).to.have.keys('first_name', 'last_name');
    expect(actual.first_name).to.be.a('string');
    expect(actual.last_name).to.be.a('string');
  });
});
