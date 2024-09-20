import type { OptionValue } from "./types";

type Props = {value: OptionValue};

type State = {value: OptionValue};

export default class StateManager {
  private state: State;

  constructor({value}: Props) {
    this.state = {
      value: $state(value),
    };
  }

  public onSelect(value: OptionValue) {
    this.state = {
      ...this.state,
      value,
    };
  }

  public get value() {
    return this.state.value;
  }


}