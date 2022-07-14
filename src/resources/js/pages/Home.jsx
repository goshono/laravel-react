import React from 'react';
import { Button, Card } from '@material-ui/core';
import MainTable from '../components/MainTable';
import { makeStyles, createStyles } from '@material-ui/core/styles';

// ヘッダーコンテンツ用の配列
const headerList = ['名前', 'タスク内容', '編集', '完了'];

// スタイルの定義
const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

function Home() {
    
    const classes = useStyles();
    let rows = [
        {
            name: 'なかやまきんに君',
            content: 'スクワット',
            // ボタンも再利用性を考慮して切り出す
            editBtn: <Button color="secondary" variant="contained">編集</Button>,
            deleteBtn: <Button color="primary" variant="contained">完了</Button>,
        },
        {
            name: 'シャイニー薊',
            content: '肩トレ',
            editBtn: <Button color="secondary" variant="contained">編集</Button>,
            deleteBtn: <Button color="primary" variant="contained">完了</Button>,
        }
    ];

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <Card className={classes.card}>
                            <MainTable headerList={headerList} rows={rows} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
// 他モジュールで読み込めるようにする
export default Home;