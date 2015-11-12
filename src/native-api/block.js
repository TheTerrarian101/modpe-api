/**
 *
 * @namespace   {Class} Block
 * @description Static methods for the Block API
 *
 * @see http://www.minecraftforum.net/forums/minecraft-pocket-edition/mcpe-mods-tools/mcpe-mod-tool-discussion/1987726-custom-blocks-tutorial
 * @see https://github.com/Connor4898/ModPE-Scripts/wiki/Custom-blocks
 * @see https://github.com/zhuowei/ModPEScripts/blob/master/500ise_blocktest.js
 * @see https://github.com/zhuowei/ModPEScripts/blob/master/500ise_enchantingbench.js
 *
 * @example
 * // Requires class name since all methods are static
 * Block.methodName([ arg1[, arg2[, ...argN] ] ]);
 *
 * ***/

/**
 *
 * @function    defineBlock
 * @memberof    Block
 * @description Define a custom block with the specified `blockId` and attributes.
 *              See __*[MCPE Textures](textures)*__ for a list of current textures.
 *
 * @param {int}                blockId          - a valid, unused block ID between 0 and 255;
 *                                                see: {@link Reference.BlockIds}
 * @param {string}             blockName        - the block name
 * @param {Array<string, int>} texture          - the texture and offset used to decorate this block
 * @param {int}                [materialSource] - the material (block ID) this block is
 *                                                based on (useful for determining which
 *                                                tool is best used to break your block;
 *                                                see: {@link Reference.BlockIds})
 * @param {boolean}            [isOpaque]       - opaque if true, transparent if false
 * @param {int}                [renderType]     - the type of block to render
 *                                                see: {@link Reference.BlockRenderTypes}
 *
 * @example
 * <caption>credit: {@link https://goo.gl/58zbrm|Zhuowei Zhang (500_Internal_Server_Error)}</caption>
 *
 * // create new block at level startup
 * var initialized = false;
 * var ID = 220;
 * function selectLevelHook() {
 *
 *   // do all this before level is initialized
 *   if (!initialized) {
 *
 *     // make a Foo Stone
 *     Block.defineBlock(ID, "Foo Stone", ["glass", 0], 1, false, 0);
 *     Block.setDestroyTime(ID, 0);
 *     Block.setLightLevel(ID, 15);
 *     Block.setLightOpacity(ID, 0);
 *     Block.setColor(ID, [0xF5A9D0]);
 *     Block.setRenderLayer(ID, 1);
 *     initialized = true;
 *   }
 * }
 *
 * ***/

/**
 *
 * @function    getAllBlockIds
 * @memberof    Block
 * @description Return all available block IDs.
 *
 * @return {int[]} - the block IDs
 *
 * ***/

/**
 *
 * @todo test this thing
 *
 * @function    getRenderType
 * @memberof    Block
 * @description Return the render type (shape) of a block with the specified `blockId`.
 *
 * @param  {int} blockId - the block ID (see: {@link Reference.BlockIds})
 * @return {int}         - the render type (see: {@link Reference.BlockRenderTypes})
 *
 * ***/

/**
 *
 * @function    setColor
 * @memberof    Block
 * @description Set the color of a block with the specified `blockId` and `color`.
 *
 * @param {int}      blockId - the block ID (see: {@link Reference.BlockIds})
 * @param {number[]} color   - a hexadecimal color value in the form: `[0xRRGGBB]`
 *
 * @see {@link http://html-color-codes.info|HTML Color Codes}
 *
 * @example
 * // make a block red
 * Block.setColor(220, [0xFF0000])
 *
 * ***/

/**
 *
 * @function    setDestroyTime
 * @memberof    Block
 * @description Set the hardness of a block with the specified `blockId` and `hardness`.
 *
 * @param {int}    blockId  - the block ID (see: {@link Reference.BlockIds})
 * @param {double} hardness - the hardness (-1 = unbreakable; destroy time will
 *                            vary depending on tool used)
 *
 * @see {@link http://minecraft.gamepedia.com/Breaking#Blocks_by_hardness|Block Hardness}
 *
 * @example
 * // make Glass Pane unbreakable
 * Block.setDestroyTime(102, -1);
 *
 * ***/

/**
 *
 * @function    setExplosionResistance
 * @memberof    Block
 * @description Set the explosion resistance of a block with the specified `blockId` and `resistance`.
 *
 * @param {int}    blockId    - the block ID (see: {@link Reference.BlockIds})
 * @param {double} resistance - the explosion resistance
 *
 * @see {@link http://minecraft.gamepedia.com/Explosion#Blast_resistance|Blast Resistance}
 *
 * @example
 * // make Gorilla Glass by changing Glass Pane from 1.5 to 6000 (same as obsidian)
 * Block.setExplosionResistance(102, 6000);
 *
 * ***/

/**
 *
 * @function    setLightLevel
 * @memberof    Block
 * @description Set the light level of a block with the specified `blockId` and `lightLevel`.
 *
 * @param {int} blockId    - the block ID (see: {@link Reference.BlockIds})
 * @param {int} lightLevel - the light level of the block (0-15)
 *
 * @see {@link http://minecraft.gamepedia.com/Light#Brightness|Brightness}
 *
 * @example
 * // tone down that glowstone
 * Block.setLightLevel(89, 4);
 *
 * ***/

/**
 *
 * @function    setLightOpacity
 * @memberof    Block
 * @description Set the light opacity of a block with the specified `blockId` and `opacity`.
 *
 * @param {int} blockId - the block ID (see: {@link Reference.BlockIds})
 * @param {int} opacity - the block's opacity to light passing through
 *                        (0-10 where 0 = most light can pass through,
 *                        10 = least light can pass through)
 *
 * ***/

/**
 *
 * @todo find out if translucent (2) is working
 *
 * @function    setRenderLayer
 * @memberof    Block
 * @description Set the render layer for a block with the specified `blockId` and `layer`.
 *
 * @param {int} blockId - the block ID (see: {@link Reference.BlockIds})
 * @param {int} layer   - the render layer [0: opaque, 1: transparent, 2 : translucent - __broken?__]
 *
 * @example
 * // render a transparent block
 * Block.setRenderLayer(220, 1);
 *
 * ***/

/**
 *
 * @function    setRenderType
 * @memberof    Block
 * @description Set the render type for a block with the specified `blockId` and `type`.
 *
 * @param {int} blockId - the block ID (see: {@link Reference.BlockIds})
 * @param {int} type    - the type of block to render (see:
 *                        {@link Reference.BlockRenderTypes})
 *
 * @example
 * // render custom block with blockId 220 using the cactus shape
 * Block.setRenderType(220, 13);
 *
 * ***/

/**
 *
 * @function    setShape
 * @memberof    Block
 * @description Set the size of a block with the specified `blockId` and start/finish coordinates.
 *
 * @param {int}    blockId - the block ID (see: {@link Reference.BlockIds})
 * @param {double} startX  - the starting x coordinate
 * @param {double} startY  - the starting y coordinate
 * @param {double} startZ  - the starting z coordinate
 * @param {double} finishX - the finishing x coordinate
 * @param {double} finishY - the finishing y coordinate
 * @param {double} finishZ - the finishing z coordinate
 *
 * @example
 * // set the shape of a block to be 1m wide(X) by 1m long(Z) by .75m high(Y)
 * Block.setShape(45, 0, 0, 0, 1, 0.75, 1);
 *
 * ***/
