import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

    // postsの状態を管理する
    const [posts, setPosts] = useState([]);    

    // 画面に到着したらgetPostsDataを呼ぶ
    useEffect(() => {
        getPostsData();
    }, [])

    // この中でgetPostsDataを呼ぶとaxiosによって繰り返しバックエンドと通信が行われてしまう。
    const getPostsData = () => {
        // バックエンドからpostsの一覧を取得する；
        axios
            .get('/api/posts')
            .then(response => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch(() => {
                console.log('通信失敗');
            });  
    }
    
    let rows = [
        {
            name: 'なかやまきんに君',
            content: 'スクワット',
            // ボタンも再利用性を考慮して切り出す
            editBtn: <Button color="secondary" variant="contained">編集</Button>,
            deleteBtn: <Button color="primary" variant="contained">完了</Button>,
        },
        {
            name: '',
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