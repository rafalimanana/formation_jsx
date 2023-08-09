import { C } from "vue/helper/V02Component.jsx";
import classNames from "classnames";

export default C.make({
	$render(h, instance) {
		var { config } = this;
		var {
			item = "",
			index = 0,
		} = config;
		return (
			<li>
				{item}
			</li>
		);
	},
});