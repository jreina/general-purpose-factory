import FixtureTypes from './FixtureTypes';
import FirstName from './Fake/FirstName';
import * as Chance from 'chance';
import LastName from './Fake/LastName';
const chance = Chance.Chance();

class FixtureProvider {
  private _propMap: Map<symbol, any>;
  constructor() {
    this._propMap = new Map();
    this._propMap.set(FixtureTypes.Person.FirstName, FirstName);
    this._propMap.set(FixtureTypes.Person.LastName, LastName);
  }
  get(valueType: symbol, n: number = 1): any {
    const val = this._propMap.get(valueType);
    if (!val)
      throw new Error(
        'Value type not found! Did you register the sumbol you are looking for?'
      );

    const outVal = n === 1 ? chance.pickone(val) : chance.pickset(val, n);
    return outVal;
  }
}

export default FixtureProvider;
