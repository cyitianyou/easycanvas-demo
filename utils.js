// 拆分个数
var count = 50;

function createArray(leftPoint, rightPoint) {
    let x = rightPoint[0] - leftPoint[0]; // x轴的差值
    let y = rightPoint[1] - leftPoint[1]; // y轴的差值
    let result = [];
    for (let i = 0; i <= count; i++) {
        result.push([
            leftPoint[0] + x * i / count,
            leftPoint[1] + y * i / count,
            1
        ]);
    }
    return result;
}
// 创建顶点
function createVertices(rt, lt, lb, rb) {
    let vertices = [];
    let topPoints = createArray(lt, rt);
    let bottomPoints = createArray(lb, rb);
    for (let i = 0; i < count; i++) {
        vertices = vertices.concat(topPoints[i + 1], topPoints[i], bottomPoints[i], bottomPoints[i + 1]);
    }
    return vertices;
}
// 创建索引
function createIndices() {
    let indices = [];
    for (let i = 0; i < count; i++) {
        // [0 ,1 ,2 ,0 ,2 , 3]
        indices = indices.concat([0 + 4 * i, 1 + 4 * i, 2 + 4 * i, 0 + 4 * i, 2 + 4 * i, 3 + 4 * i]);
    }
    return indices;
}
// 创建纹理
function createTextures() {
    let textures = [];
    for (let i = 0; i < count; i++) {
        // [1, 0, 0, 0, 0, 1,1,1]
        textures = textures.concat([(i + 1) / count, 0, i / count, 0, i / count, 1, (i + 1) / count, 1]);
    }
    return textures;
}
