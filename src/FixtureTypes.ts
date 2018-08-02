const FixtureTypes = {
  Person: {
    FirstName: Symbol('FixtureTypes.Person.FirstName'),
    LastName: Symbol('FixtureTypes.Person.LastName'),
    MiddleName: Symbol('FixtureTypes.Person.MiddleName')
  },
  Address: {
    Street: Symbol('FixtureTypes.Address.Street'),
    City: Symbol('FixtureTypes.Address.City'),
    State: Symbol('FixtureTypes.Address.State')
  }
};

Object.freeze(FixtureTypes);

export default FixtureTypes;
