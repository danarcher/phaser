#define SHADER_NAME PHASER_COLORMATRIX_FS

precision mediump float;

uniform sampler2D uMainSampler;
uniform float uColorMatrix[20];

varying vec2 outTexCoord;

void main ()
{
    vec4 c = texture2D(uMainSampler, outTexCoord);

    gl_FragColor.r = uColorMatrix[0] * c.r + uColorMatrix[1] * c.g + uColorMatrix[2] * c.b + uColorMatrix[4];
    gl_FragColor.g = uColorMatrix[5] * c.r + uColorMatrix[6] * c.g + uColorMatrix[7] * c.b + uColorMatrix[9];
    gl_FragColor.b = uColorMatrix[10] * c.r + uColorMatrix[11] * c.g + uColorMatrix[12] * c.b + uColorMatrix[14];
    gl_FragColor.a = c.a;
}
