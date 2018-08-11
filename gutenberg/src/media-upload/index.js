/**
 * Block dependencies
 */
import icons from './icons';
import './editor.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    Editable,
    MediaUpload,
} = wp.editor;
const {
    Button,
} = wp.components;

/**
 * Register example block
 */
export default registerBlockType(
    'simple-shortcode-block/media-upload',
    {
        title: __( 'Example - Media Upload Button', 'simple-shortcode-block' ),
        description: __( 'An example of how to use the MediaUpload component.', 'simple-shortcode-block'),
        category: 'simple-shortcode-block',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icons.upload,
        },
        keywords: [
            __( 'Image', 'simple-shortcode-block' ),
            __( 'MediaUpload', 'simple-shortcode-block' ),
            __( 'Message', 'simple-shortcode-block' ),
        ],
        attributes: {
            imgURL: {
                type: 'string',
                source: 'attribute',
                attribute: 'src',
                selector: 'img',
            },
            imgID: {
                type: 'number',
            },
            imgAlt: {
                type: 'string',
                source: 'attribute',
                attribute: 'alt',
                selector: 'img',
            }
        },
        edit( { attributes, className, setAttributes, isSelected } ) {
            const { imgID, imgURL, imgAlt } = attributes;
            const onSelectImage = img => {
                setAttributes( {
                    imgID: img.id, //clientId ?
                    imgURL: img.url,
                    imgAlt: img.alt,
                } );
            };
            const onRemoveImage = () => {
                setAttributes({
                    imgID: null,
                    imgURL: null,
                    imgAlt: null,
                });
            }
            return (
                <div className={ className }>

                    { ! imgID ? (

                        <MediaUpload
                            onSelect={ onSelectImage }
                            type="image"
                            value={ imgID }
                            render={ ( { open } ) => (
                                <Button
                                    className={ "button button-large" }
                                    onClick={ open }
                                >
                                    { icons.upload }
                                    { __( ' Upload Image', 'simple-shortcode-block' ) }
                                </Button>
                            ) }
                        >
                        </MediaUpload>

                    ) : (

                        <p class="image-wrapper">
                            <img
                                src={ imgURL }
                                alt={ imgAlt }
                            />

                            { isSelected ? (

                                <Button
                                    className="remove-image"
                                    onClick={ onRemoveImage }
                                >
                                    { icons.remove }
                                </Button>

                            ) : null }

                        </p>
                    )}

                </div>
            );
        },
        save( { attributes: { imgURL, imgAlt } } ) {
            return (
                <p>
                    <img
                        src={ imgURL }
                        alt={ imgAlt }
                    />
                </p>
            );
        },
    },
);
