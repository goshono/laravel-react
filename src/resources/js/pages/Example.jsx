import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core'; //Buttonをインポート

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component!!</div>

                        <div className="card-body">Pages配下に移動したよ</div>
                        <Button color="secondary" variant="contained">Homeに遷移ボタン</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;
