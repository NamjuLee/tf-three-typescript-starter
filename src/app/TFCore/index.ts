import * as tf from '@tensorflow/tfjs';

export class TFCore{
    constructor(){
        console.log('init Three core')  
        console.log(`tf version:${tf.version["tfjs-core"]}`);
        this.init();
    }
    init(){
        // Define a model for linear regression.
        const model = tf.sequential();
        model.add(tf.layers.dense({units: 1, inputShape: [1]}));
        
        // Prepare the model for training: Specify the loss and the optimizer.
        model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
        
        // Generate some synthetic data for training.
        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
        const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
        
        console.log('x * y =', tf.add(xs, ys).toString());
        // Train the model using the data.
        model.fit(xs, ys).then(() => {
            // Use the model to do inference on a data point the model hasn't seen before:
            let out = model.predict(tf.tensor2d([5], [1, 1])).toString();
            console.log(out);
        });
    }
}