gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code = {};
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.localVariables = [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.idToCallbackMap = new Map();
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSprite2Objects1= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSprite2Objects2= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewTextObjects1= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewTextObjects2= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewText2Objects1= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewText2Objects2= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects2= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GD_951081_951094_951091Objects1= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GD_951081_951094_951091Objects2= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSprite6Objects1= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSprite6Objects2= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinObjects1= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinObjects2= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinTextObjects1= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinTextObjects2= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GD_951092_951086_951085Objects1= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GD_951092_951086_951085Objects2= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDBugObjects1= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDBugObjects2= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDBug2Objects1= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDBug2Objects2= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoin2Objects1= [];
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoin2Objects2= [];


gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1[k] = gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
}

}


};gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.mapOfGDgdjs_9546_959552_959532_95951091_95951088_95951086_95951074_95951077_95951085_95951100Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1});
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.mapOfGDgdjs_9546_959552_959532_95951091_95951088_95951086_95951074_95951077_95951085_95951100Code_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinObjects1});
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.mapOfGDgdjs_9546_959552_959532_95951091_95951088_95951086_95951074_95951077_95951085_95951100Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1});
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.mapOfGDgdjs_9546_959552_959532_95951091_95951088_95951086_95951074_95951077_95951085_95951100Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSprite6Objects1});
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1[k] = gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}

{ //Subevents
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( !(gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1[k] = gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.mapOfGDgdjs_9546_959552_959532_95951091_95951088_95951086_95951074_95951077_95951085_95951100Code_9546GDNewSpriteObjects1Objects, gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.mapOfGDgdjs_9546_959552_959532_95951091_95951088_95951086_95951074_95951077_95951085_95951100Code_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinTextObjects1);
{for(var i = 0, len = gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.mapOfGDgdjs_9546_959552_959532_95951091_95951088_95951086_95951074_95951077_95951085_95951100Code_9546GDNewSpriteObjects1Objects, gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.mapOfGDgdjs_9546_959552_959532_95951091_95951088_95951086_95951074_95951077_95951085_95951100Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "второй уровень");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSprite2Objects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSprite2Objects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewTextObjects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewTextObjects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewText2Objects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewText2Objects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GD_951081_951094_951091Objects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GD_951081_951094_951091Objects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSprite6Objects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSprite6Objects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinObjects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinObjects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinTextObjects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinTextObjects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GD_951092_951086_951085Objects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GD_951092_951086_951085Objects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDBugObjects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDBugObjects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDBug2Objects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDBug2Objects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoin2Objects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoin2Objects2.length = 0;

gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.eventsList1(runtimeScene);
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSprite2Objects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSprite2Objects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewTextObjects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewTextObjects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewText2Objects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewText2Objects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSpriteObjects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GD_951081_951094_951091Objects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GD_951081_951094_951091Objects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSprite6Objects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDNewSprite6Objects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinObjects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinObjects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinTextObjects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoinTextObjects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GD_951092_951086_951085Objects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GD_951092_951086_951085Objects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDBugObjects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDBugObjects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDBug2Objects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDBug2Objects2.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoin2Objects1.length = 0;
gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code.GDCoin2Objects2.length = 0;


return;

}

gdjs['_52_32_1091_1088_1086_1074_1077_1085_1100Code'] = gdjs._52_32_1091_1088_1086_1074_1077_1085_1100Code;
