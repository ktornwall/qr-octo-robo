import * as React from "react";

export interface IRadioButtonGroupOption<T> {
  id: T;
  label: string;
}

export interface IProps<T> {
  activeClass: string;
  buttonColor: string;
  buttonSize: "sm" | "md" | "lg";
  onChange: (selectedOption: IRadioButtonGroupOption<T>) => void;
  options: Array<IRadioButtonGroupOption<T>>;
  value: T;
}

class RadioButtonGroup<T> extends React.Component<IProps<T>> {
  public static defaultProps = {
    activeClass: "active",
    buttonColor: "default",
    buttonSize: "md"
  };

  public render() {
    const { buttonSize, options } = this.props;
    return (
      <div className={`btn-group btn-group-${buttonSize}`}>
        {options.map(this.renderOption)}
      </div>
    );
  }

  private handleChange = (option: IRadioButtonGroupOption<T>) => () =>
    this.props.onChange(option);

  private renderOption = (option: IRadioButtonGroupOption<T>) => {
    const { value, activeClass, buttonColor } = this.props;
    const buttonClasses = ["btn"];

    if (option.id === value) {
      buttonClasses.push(activeClass);
    } else {
      buttonClasses.push(`btn-${buttonColor}`);
    }

    return (
      <button
        key={option.label}
        type="button"
        className={buttonClasses.join(" ")}
        onClick={this.handleChange(option)}
      >
        {option.label}
      </button>
    );
  };
}

export default RadioButtonGroup;
