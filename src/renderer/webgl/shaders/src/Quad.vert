#define SHADER_NAME PHASER_QUAD_VS

precision mediump float;

uniform mat4 uProjectionMatrix;

attribute vec2 inPosition;
attribute vec2 inTexCoord;

varying vec2 outTexCoord;

void main ()
{
    gl_Position = uProjectionMatrix * vec4(inPosition, 1.0, 1.0);

    outTexCoord = gl_Position.xy * 0.5 + 0.5;
}
