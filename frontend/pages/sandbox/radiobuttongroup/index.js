import { Fragment } from "react"

import { TbNumber7 } from "react-icons/tb"
import { BiFootball, BiWallet } from "react-icons/bi"
import { FaBtc } from "react-icons/fa"

import { RadioButtonGroup } from "../../../components/RadioButtonGroup/RadioButtonGroup"
import { RoundButton } from "../../../components/Button/RoundButton"

import styles from "../../../styles/Containers.module.sass"

const RadioButtonGroupSandbox = () => {
  return (
    <Fragment>
      <div className={styles.list}>
        <h1>RadioButtonGroup</h1>
          <div>
            <RadioButtonGroup>
              <RoundButton className="primary" icon={<TbNumber7 />}>
                Gaming
              </RoundButton>
              <RoundButton icon={<BiFootball />}>
                Sport
              </RoundButton>
            </RadioButtonGroup>
          </div>
          <div>
            <RadioButtonGroup>
              <RoundButton icon={<FaBtc />}>
                0<span>.000000</span>
              </RoundButton>
              <RoundButton className="primary" icon={<BiWallet />}>
                Wallet
              </RoundButton>
            </RadioButtonGroup>
          </div>
        </div>
    </Fragment>
  )
}

export default RadioButtonGroupSandbox
