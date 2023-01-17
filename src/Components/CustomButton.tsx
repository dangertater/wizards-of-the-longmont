import React from "react"
import { Button, Space } from "antd"

let CustomAntDButton: React.FC = () => (
	<Space wrap>
		<Button type="primary">
			TODO: onclick this will generate timeline shit from the other branch
		</Button>
	</Space>
)

export function CustomButton() {
	return <CustomAntDButton></CustomAntDButton>
}

// https://ant.design/components/button
