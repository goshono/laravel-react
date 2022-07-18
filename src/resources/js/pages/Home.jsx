import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from '@material-ui/core';
import MainTable from '../components/MainTable';
import PostForm  from '../components/PostForm';
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

    // フォームの入力値を管理するステート定義
    const [formData, setFormData] = useState({name: '', content: ''});

    // 画面に到着したらgetPostsDataを呼ぶ
    // 直接axios通信を書くと繰り返しバックエンドと通信が行われてしまうので関数化する。
    useEffect(() => {
        getPostsData();
    }, [])

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

    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
    }

    const createPost = async() => {
        //　空の場合は弾く
        if (formData == '') {
            return;
        }

        await axios
            .post('api/post/create',
                {
                    name: formData.name,
                    content: formData.content
                }
            )
            .then((response) => {
                // 戻り値をpostsに追加
                const tempPosts = posts;
                tempPosts.push(response.data);
                setPosts(tempPosts);
                setFormData({name: '', content: ''});
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    let rows = [];
    posts.map(post =>
        rows.push({
            name: post.name,
            content: post.content,
            editBtn: <Button color="secondary" variant="contained" key={post.id} href={`/post/edit/${post.id}`}>編集</Button>,
            deleteBtn: <Button color="primary" variant="contained">完了</Button>
        })
    );

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>
                            <PostForm  data={formData} inputChange={inputChange} btnFnc={createPost} />
                        </Card>
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