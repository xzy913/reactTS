import styles from "./comp1.module.scss"
import { Button } from "antd"
import { UpCircleOutlined } from "@ant-design/icons"
export default function Comp1() {
  return (
    <div className={styles.box}>Comp1
    <Button>11</Button>
    <UpCircleOutlined/>
    </div>
  )
}
