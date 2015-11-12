/**
 *
 * @namespace   Reference
 * @description __Reference for MCPE data values not included in BlockLauncher.__
 *              The variables documented here are __*NOT*__ available for use in ModPE scripts!
 *
 * @todo Move these to a manual or tutorial page
 *
 * ***/
function Reference() {

  /**
   *
   * @lends    Reference.prototype
   *
   * ***/
  var ref = {

  /**
   *
   * BlockIds
   * @description Block data values.
   *
   * @property {int} Air                                 - 0
   * @property {int} Stone                               - 1
   * @property {int} Grass&nbsp;Block                    - 2
   * @property {int} Dirt                                - 3
   * @property {int} Cobblestone                         - 4
   * @property {int} Wooden&nbsp;Planks                  - 5
   * @property {int} Sapling                             - 6
   * @property {int} Bedrock                             - 7
   * @property {int} Water                               - 8
   * @property {int} Stationary&nbsp;Water               - 9
   * @property {int} Lava                                - 10
   * @property {int} Stationary&nbsp;Lava                - 11
   * @property {int} Sand                                - 12
   * @property {int} Gravel                              - 13
   * @property {int} Gold&nbsp;Ore                       - 14
   * @property {int} Iron&nbsp;Ore                       - 15
   * @property {int} Coal&nbsp;Ore                       - 16
   * @property {int} Wood                                - 17
   * @property {int} Leaves                              - 18
   * @property {int} Sponge                              - 19
   * @property {int} Glass                               - 20
   * @property {int} Lapis&nbsp;Lazuli&nbsp;Ore          - 21
   * @property {int} Lapis&nbsp;Lazuli&nbsp;Block        - 22
   * @property {int} Sandstone                           - 24
   * @property {int} Bed                                 - 26
   * @property {int} Powered&nbsp;Rail                   - 27
   * @property {int} Cobweb                              - 30
   * @property {int} Tall&nbsp;Grass                     - 31
   * @property {int} Dead&nbsp;Bush                      - 32
   * @property {int} Wool                                - 35
   * @property {int} Dandelion                           - 37
   * @property {int} Flower                              - 38
   * @property {int} Brown&nbsp;Mushroom                 - 39
   * @property {int} Red&nbsp;Mushroom                   - 40
   * @property {int} Block&nbsp;of&nbsp;Gold             - 41
   * @property {int} Block&nbsp;of&nbsp;Iron             - 42
   * @property {int} Double&nbsp;Stone&nbsp;Slab         - 43
   * @property {int} Stone&nbsp;Slab                     - 44
   * @property {int} Bricks                              - 45
   * @property {int} TNT                                 - 46
   * @property {int} Bookshelf                           - 47
   * @property {int} Moss&nbsp;Stone                     - 48
   * @property {int} Obsidian                            - 49
   * @property {int} Torch                               - 50
   * @property {int} Fire                                - 51
   * @property {int} Monster&nbsp;Spawner                - 52
   * @property {int} Oak&nbsp;Wood&nbsp;Stairs           - 53
   * @property {int} Chest                               - 54
   * @property {int} Diamond&nbsp;Ore                    - 56
   * @property {int} Block&nbsp;of&nbsp;Diamond          - 57
   * @property {int} Crafting&nbsp;Table                 - 58
   * @property {int} Seeds                               - 59
   * @property {int} Farmland                            - 60
   * @property {int} Furnace                             - 61
   * @property {int} Burning&nbsp;Furnace                - 62
   * @property {int} Sign                                - 63
   * @property {int} Wooden&nbsp;Door                    - 64
   * @property {int} Ladder                              - 65
   * @property {int} Rail                                - 66
   * @property {int} Cobblestone&nbsp;Stairs             - 67
   * @property {int} Wall&nbsp;Sign                      - 68
   * @property {int} Iron&nbsp;Door                      - 71
   * @property {int} Redstone&nbsp;Ore                   - 73
   * @property {int} Glowing&nbsp;Redstone&nbsp;Ore      - 74
   * @property {int} Snow                                - 78
   * @property {int} Ice                                 - 79
   * @property {int} Snow                                - 80
   * @property {int} Cactus                              - 81
   * @property {int} Clay                                - 82
   * @property {int} Sugar&nbsp;Cane                     - 83
   * @property {int} Fence                               - 85
   * @property {int} Pumpkin                             - 86
   * @property {int} Netherrack                          - 87
   * @property {int} Soul&nbsp;Sand                      - 88
   * @property {int} Glowstone                           - 89
   * @property {int} Jack&nbsp;o'Lantern                 - 91
   * @property {int} Cake                                - 92
   * @property {int} Invisible&nbsp;Bedrock              - 95
   * @property {int} Trapdoor                            - 96
   * @property {int} Monster&nbsp;Egg                    - 97
   * @property {int} Stone&nbsp;Brick                    - 98
   * @property {int} Brown&nbsp;Mushroom                 - 99
   * @property {int} Red&nbsp;Mushroom                   - 100
   * @property {int} Iron&nbsp;Bars                      - 101
   * @property {int} Glass&nbsp;Pane                     - 102
   * @property {int} Melon                               - 103
   * @property {int} Pumpkin&nbsp;Stem                   - 104
   * @property {int} Melon&nbsp;Stem                     - 105
   * @property {int} Vines                               - 106
   * @property {int} Fence&nbsp;Gate                     - 107
   * @property {int} Brick&nbsp;Stairs                   - 108
   * @property {int} Stone&nbsp;Brick&nbsp;Stairs        - 109
   * @property {int} Mycelium                            - 110
   * @property {int} Lily&nbsp;Pad                       - 111
   * @property {int} Nether&nbsp;Brick                   - 112
   * @property {int} Nether&nbsp;Brick&nbsp;Fence        - 113
   * @property {int} Nether&nbsp;Brick&nbsp;Stairs       - 114
   * @property {int} Nether&nbsp;Wart                    - 115
   * @property {int} Enchantment&nbsp;Table              - 116
   * @property {int} Brewing&nbsp;Stand                  - 117
   * @property {int} End&nbsp;Portal&nbsp;Frame          - 120
   * @property {int} End&nbsp;Stone                      - 121
   * @property {int} Cake                                - 126
   * @property {int} Cocoa                               - 127
   * @property {int} Sandstone&nbsp;Stairs               - 128
   * @property {int} Emerald&nbsp;Ore                    - 129
   * @property {int} Block&nbsp;of&nbsp;Emerald          - 133
   * @property {int} Spruce&nbsp;Wood&nbsp;Stairs        - 134
   * @property {int} Birch&nbsp;Wood&nbsp;Stairs         - 135
   * @property {int} Jungle&nbsp;Wood&nbsp;Stairs        - 136
   * @property {int} Cobblestone&nbsp;Wall               - 139
   * @property {int} Flower&nbsp;Pot                     - 140
   * @property {int} Carrots                             - 141
   * @property {int} Potato                              - 142
   * @property {int} Mob&nbsp;head                       - 143
   * @property {int} Anvil                               - 145
   * @property {int} Block&nbsp;of&nbsp;Redstone         - 152
   * @property {int} Nether&nbsp;Quartz&nbsp;Ore         - 153
   * @property {int} Block&nbsp;of&nbsp;Quartz           - 155
   * @property {int} Quartz&nbsp;Stairs                  - 156
   * @property {int} Wooden&nbsp;Double&nbsp;Slab        - 157
   * @property {int} Wooden&nbsp;Slab                    - 158
   * @property {int} Stained&nbsp;Clay                   - 159
   * @property {int} Acacia/Dark&nbsp;Oak&nbsp;Leaves    - 161
   * @property {int} Acacia/Dark&nbsp;Oak&nbsp;Wood      - 162
   * @property {int} Acacia&nbsp;Wood&nbsp;Stairs        - 163
   * @property {int} Dark&nbsp;Oak&nbsp;Wood&nbsp;Stairs - 164
   * @property {int} Hay&nbsp;Bale                       - 170
   * @property {int} Carpet                              - 171
   * @property {int} Hardened&nbsp;Clay                  - 172
   * @property {int} Block&nbsp;of&nbsp;Coal             - 173
   * @property {int} Packed&nbsp;Ice                     - 174
   * @property {int} Sunflower                           - 175
   * @property {int} Spruce&nbsp;Fence&nbsp;Gate         - 183
   * @property {int} Birch&nbsp;Fence&nbsp;Gate          - 184
   * @property {int} Jungle&nbsp;Fence&nbsp;Gate         - 185
   * @property {int} Dark&nbsp;Oak&nbsp;Fence&nbsp;Gate  - 186
   * @property {int} Acacia&nbsp;Fence&nbsp;Gate         - 187
   * @property {int} Grass&nbsp;Path                     - 198
   * @property {int} Podzol                              - 243
   * @property {int} Beetroot                            - 244
   * @property {int} Stone&nbsp;Cutter                   - 245
   * @property {int} Glowing&nbsp;Obsidian               - 246
   * @property {int} Nether&nbsp;Reactor&nbsp;Core       - 247
   * @property {int} Update&nbsp;Game&nbsp;Block         - 248
   * @property {int} Update&nbsp;Game&nbsp;Block         - 249
   * @property {int} info_reserved6                      - 255
   *
   * ***/
   BlockIds: {},

  /**
   *
   * BlockRenderTypes
   * @description Block render types - determines the shape (NOT size) of a block;
   *              useful when defining custom blocks.
   *
   * @see {@link Block.defineBlock}, {@link Block.getRenderType}, {@link Block.setRenderType}
   *
   * @property {int} Standard        - 0
   * @property {int} Flower          - 1
   * @property {int} Torch           - 2
   * @property {int} Fire            - 3
   * @property {int} Fluid           - 4
   * @property {int} Crops           - 6
   * @property {int} Door            - 7
   * @property {int} Ladder          - 8
   * @property {int} Stairs          - 10
   * @property {int} Fence           - 11
   * @property {int} Cactus          - 13
   * @property {int} Bed             - 14
   * @property {int} Pane            - 18
   * @property {int} Stem            - 19
   * @property {int} Fence&nbsp;Gate - 21
   *
   * ***/
   BlockRenderTypes: {},

  /**
   *
   * ItemIds
   * @description Item data values.
   *
   * @property {int} Iron&nbsp;Shovel               - 256
   * @property {int} Iron&nbsp;Pickaxe              - 257
   * @property {int} Iron&nbsp;Axe                  - 258
   * @property {int} Flint&nbsp;and&nbsp;Steel      - 259
   * @property {int} Apple                          - 260
   * @property {int} Bow                            - 261
   * @property {int} Arrow                          - 262
   * @property {int} Coal                           - 263
   * @property {int} Diamond                        - 264
   * @property {int} Iron&nbsp;Ingot                - 265
   * @property {int} Gold&nbsp;Ingot                - 266
   * @property {int} Iron&nbsp;Sword                - 267
   * @property {int} Wooden&nbsp;Sword              - 268
   * @property {int} Wooden&nbsp;Shovel             - 269
   * @property {int} Wooden&nbsp;Pickaxe            - 270
   * @property {int} Wooden&nbsp;Axe                - 271
   * @property {int} Stone&nbsp;Sword               - 272
   * @property {int} Stone&nbsp;Shovel              - 273
   * @property {int} Stone&nbsp;Pickaxe             - 274
   * @property {int} Stone&nbsp;Axe                 - 275
   * @property {int} Diamond&nbsp;Sword             - 276
   * @property {int} Diamond&nbsp;Shovel            - 277
   * @property {int} Diamond&nbsp;Pickaxe           - 278
   * @property {int} Diamond&nbsp;Axe               - 279
   * @property {int} Stick                          - 280
   * @property {int} Bowl                           - 281
   * @property {int} Mushroom&nbsp;Stew             - 282
   * @property {int} Gold&nbsp;Sword                - 283
   * @property {int} Gold&nbsp;Shovel               - 284
   * @property {int} Gold&nbsp;Pickaxe              - 285
   * @property {int} Gold&nbsp;Axe                  - 286
   * @property {int} String                         - 287
   * @property {int} Feather                        - 288
   * @property {int} Gunpowder                      - 289
   * @property {int} Wooden&nbsp;Hoe                - 290
   * @property {int} Stone&nbsp;Hoe                 - 291
   * @property {int} Iron&nbsp;Hoe                  - 292
   * @property {int} Diamond&nbsp;Hoe               - 293
   * @property {int} Gold&nbsp;Hoe                  - 294
   * @property {int} Seeds                          - 295
   * @property {int} Wheat                          - 296
   * @property {int} Bread                          - 297
   * @property {int} Leather&nbsp;Cap               - 298
   * @property {int} Leather&nbsp;Tunic             - 299
   * @property {int} Leather&nbsp;Pants             - 300
   * @property {int} Leather&nbsp;Boots             - 301
   * @property {int} Chain&nbsp;Helmet              - 302
   * @property {int} Chain&nbsp;Chestplate          - 303
   * @property {int} Chain&nbsp;Leggings            - 304
   * @property {int} Chain&nbsp;Boots               - 305
   * @property {int} Iron&nbsp;Helmet               - 306
   * @property {int} Iron&nbsp;Chestplate           - 307
   * @property {int} Iron&nbsp;Leggings             - 308
   * @property {int} Iron&nbsp;Boots                - 309
   * @property {int} Diamond&nbsp;Helmet            - 310
   * @property {int} Diamond&nbsp;Chestplate        - 311
   * @property {int} Diamond&nbsp;Leggings          - 312
   * @property {int} Diamond&nbsp;Boots             - 313
   * @property {int} Golden&nbsp;Helmet             - 314
   * @property {int} Golden&nbsp;Chestplate         - 315
   * @property {int} Golden&nbsp;Leggings           - 316
   * @property {int} Golden&nbsp;Boots              - 317
   * @property {int} Flint                          - 318
   * @property {int} Raw&nbsp;Porkchop              - 319
   * @property {int} Cooked&nbsp;Porkchop           - 320
   * @property {int} Painting                       - 321
   * @property {int} Golden&nbsp;Apple              - 322
   * @property {int} Sign                           - 323
   * @property {int} Wooden&nbsp;Door               - 324
   * @property {int} Bucket                         - 325
   * @property {int} Minecart                       - 328
   * @property {int} Saddle                         - 329
   * @property {int} Iron&nbsp;Door                 - 330
   * @property {int} Redstone                       - 331
   * @property {int} Snowball                       - 332
   * @property {int} Boat                           - 333
   * @property {int} Leather                        - 334
   * @property {int} Brick                          - 336
   * @property {int} Clay                           - 337
   * @property {int} Sugar&nbsp;Cane                - 338
   * @property {int} Paper                          - 339
   * @property {int} Book                           - 340
   * @property {int} Slimeball                      - 341
   * @property {int} Egg                            - 344
   * @property {int} Compass                        - 345
   * @property {int} Fishing&nbsp;Rod               - 346
   * @property {int} Clock                          - 347
   * @property {int} Glowstone&nbsp;Dust            - 348
   * @property {int} Raw&nbsp;Fish                  - 349
   * @property {int} Cooked&nbsp;Fish               - 350
   * @property {int} Various&nbsp;Dye               - 351
   * @property {int} Bone                           - 352
   * @property {int} Sugar                          - 353
   * @property {int} Cake                           - 354
   * @property {int} Bed                            - 355
   * @property {int} Cookie                         - 357
   * @property {int} Shears                         - 359
   * @property {int} Melon                          - 360
   * @property {int} Pumpkin&nbsp;Seeds             - 361
   * @property {int} Melon&nbsp;Seeds               - 362
   * @property {int} Raw&nbsp;Beef                  - 363
   * @property {int} Steak                          - 364
   * @property {int} Raw&nbsp;Chicken               - 365
   * @property {int} Cooked&nbsp;Chicken            - 366
   * @property {int} Rotten&nbsp;Flesh              - 367
   * @property {int} Blaze&nbsp;Rod                 - 368
   * @property {int} Blaze&nbsp;Rod                 - 369
   * @property {int} Ghast&nbsp;Tear                - 370
   * @property {int} Gold&nbsp;Nugget               - 371
   * @property {int} Nether&nbsp;Wart               - 372
   * @property {int} Water/Potion&nbsp;Bottle       - 373
   * @property {int} Glass&nbsp;Bottle              - 374
   * @property {int} Spider&nbsp;Eye                - 375
   * @property {int} Fermented&nbsp;Spider&nbsp;Eye - 376
   * @property {int} Blaze&nbsp;Powder              - 377
   * @property {int} Magma&nbsp;Cream               - 378
   * @property {int} Brewing&nbsp;Stand             - 379
   * @property {int} Glistering&nbsp;Melon          - 382
   * @property {int} Spawn&nbsp;Egg                 - 383
   * @property {int} Bottle&nbsp;o'&nbsp;Enchanting - 384
   * @property {int} Emerald                        - 388
   * @property {int} Flower&nbsp;Pot                - 390
   * @property {int} Carrot                         - 391
   * @property {int} Potato                         - 392
   * @property {int} Baked&nbsp;Potato              - 393
   * @property {int} Poisonous&nbsp;Potato          - 394
   * @property {int} Golden&nbsp;Carrot             - 396
   * @property {int} Mob&nbsp;head                  - 397
   * @property {int} Pumpkin&nbsp;Pie               - 400
   * @property {int} Enchanted&nbsp;Book            - 403
   * @property {int} Nether&nbsp;Brick              - 405
   * @property {int} Nether&nbsp;Quartz             - 406
   * @property {int} Rabbit's&nbsp;Foot             - 414
   * @property {int} Splash&nbsp;Potion             - 438
   * @property {int} Beetroot                       - 457
   * @property {int} Beetroot&nbsp;Seeds            - 458
   * @property {int} Beetroot&nbsp;Soup             - 459
   *
   * ***/
   ItemIds: {}
 };
}
