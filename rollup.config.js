import node from "rollup-plugin-node-resolve";
import minify from 'rollup-plugin-minify-es';


export default {
    input: "index.js",
    output: {
        name: "d3-functions",
        format: "esm",
        file: "dist/d3-functions.js"
    },
    plugins: [
        node({jsnext: true}),
        minify()
    ]
};
