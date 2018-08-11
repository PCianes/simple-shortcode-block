/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InspectorControls,
    ColorPalette,
} = wp.editor;
const {
    Button,
    ButtonGroup,
    CheckboxControl,
    PanelBody,
    PanelRow,
    PanelColor,
    RadioControl,
    RangeControl,
    TextControl,
    TextareaControl,
    ToggleControl,
    Toolbar,
    SelectControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const { attributes: { checkboxControl, colorPaletteControl, radioControl, rangeControl, textControl, textareaControl, toggleControl, selectControl }, setAttributes } = this.props;

        return (
            <InspectorControls>
                <PanelBody
                    title={ __( 'Panel Body Title', 'simple-shortcode-block' ) }
                    initialOpen={ false }
                >
                    <PanelRow>
                        <p>{ __( 'Panel Body Copy', 'simple-shortcode-block' ) }</p>
                    </PanelRow>
                </PanelBody>

                <PanelBody>
                    <CheckboxControl
                        heading={ __( 'Checkbox Control', 'simple-shortcode-block' ) }
                        label={ __( 'Check here', 'simple-shortcode-block' ) }
                        help={ __( 'Checkbox control help text', 'simple-shortcode-block' ) }
                        checked={ checkboxControl }
                        onChange={ checkboxControl => setAttributes( { checkboxControl } ) }
                    />
                </PanelBody>

                <PanelColor
                    title={ __( 'Color Panel', 'simple-shortcode-block' ) }
                    colorValue={ colorPaletteControl }
                >
                    <ColorPalette
                        value={ colorPaletteControl }
                        onChange={ colorPaletteControl => setAttributes( { colorPaletteControl } ) }
                    />
                </PanelColor>

                <PanelBody>
                    <RadioControl
                        label={ __( 'Radio Control', 'simple-shortcode-block' ) }
                        selected={ radioControl }
                        options={ [
                            { label: 'Author', value: 'a' },
                            { label: 'Editor', value: 'e' },
                        ] }
                        onChange={ radioControl => setAttributes( { radioControl } ) }
                    />
                </PanelBody>

                <PanelBody>
                    <RangeControl
                        beforeIcon="arrow-left-alt2"
                        afterIcon="arrow-right-alt2"
                        label={ __( 'Range Control', 'simple-shortcode-block' ) }
                        value={ rangeControl }
                        onChange={ rangeControl => setAttributes( { rangeControl } ) }
                        min={ 1 }
                        max={ 10 }
                    />
                </PanelBody>

                <PanelBody>
                    <TextControl
                        label={ __( 'Text Control', 'simple-shortcode-block' ) }
                        help={ __( 'Text control help text', 'simple-shortcode-block' ) }
                        value={ textControl }
                        onChange={ textControl => setAttributes( { textControl } ) }
                    />
                </PanelBody>

                <PanelBody>
                    <TextareaControl
                        label={ __( 'Text Area Control', 'simple-shortcode-block' ) }
                        help={ __( 'Text area control help text', 'simple-shortcode-block' ) }
                        value={ textareaControl }
                        onChange={ textareaControl => setAttributes( { textareaControl } ) }
                    />
                </PanelBody>

                <PanelBody>
                    <ToggleControl
                        label={ __( 'Toggle Control', 'simple-shortcode-block' ) }
                        checked={ toggleControl }
                        onChange={ toggleControl => setAttributes( { toggleControl } ) }
                    />
                </PanelBody>

                <PanelBody>
                    <SelectControl
                        label={ __( 'Select Control', 'simple-shortcode-block' ) }
                        value={ selectControl }
                        options={ [
                            { value: 'a', label: __( 'Option A', 'simple-shortcode-block' ) },
                            { value: 'b', label: __( 'Option B', 'simple-shortcode-block' ) },
                            { value: 'c', label: __( 'Option C', 'simple-shortcode-block' ) },
                        ] }
                        onChange={ selectControl => setAttributes( { selectControl } ) }
                    />
                </PanelBody>

            </InspectorControls>
        );
    }
}
