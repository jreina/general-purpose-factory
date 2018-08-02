import FixtureProvider from './FixtureProvider';
import ModelDefinition from './ModelDefinition';

class GeneralPurposeFactory {
  private _model: ModelDefinition;
  private _fixture: FixtureProvider;
  constructor(model: ModelDefinition) {
    this._model = model;
    this._fixture = new FixtureProvider();
  }

  build() {
    const keys = Object.keys(this._model);

    const product = keys.reduce(
      (memo, key) => ({
        ...memo,
        [key]: this._fixture.get(this._model[key].ValueType)
      }),
      {}
    );

    return product;
  }
}

export default GeneralPurposeFactory;
