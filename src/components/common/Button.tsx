import * as React from "react"

interface IProps extends React.Props<any> {
  handleOnClick: any
  disabled?: boolean
  type?: string
  classNames?: string[]
}

export const Button = (props: IProps) => {
  const type = props.type ? props.type : "primary"
  const defaultClassNames = ["button", `is-${type}`]
  const classNames = props.classNames
    ? [...defaultClassNames, ...props.classNames]
    : defaultClassNames

  const button = !props.disabled ? (
    <a className={classNames.join(" ")} onClick={props.handleOnClick}>
      {props.children}
    </a>
  ) : (
    <span className="button is-static">{props.children}</span>
  )

  return button
}
