/**
 * Block dependencies
 */
import classnames from 'classnames';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { PlainText } = wp.editor;
const { Dashicon } = wp.components;

const DynamicShortcodeInput = ( { attributes : { shortcode }, className, setAttributes } ) => (
	<div className={ classnames( className, 'ssb-shortcode-input' ) }>
		<label className="ssb-shortcode-label">
			<Dashicon icon="shortcode" />{ __( 'Shortcode', 'simple-shortcode-block' ) }
		</label>
		<PlainText
			className="input-control"
			value={ shortcode }
			placeholder={ __( 'Write here your [shortcode]' ) }
			onChange={ shortcode => setAttributes( { shortcode } ) }
		/>
	</div>
	);

	export default DynamicShortcodeInput;
