import React, { useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import PostForm from "../components/PostForm";
import axios from "axios";

const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    }
}))
function PostEdit() {
    const classes = useStyles();
    const id = useParams().id;

    const [editData, setEditData] = useState({name: '', content: ''});

    useEffect(() => {
        getEditData();
    }, []);

    function getEditData() {
        axios
            .post('/api/post/edit', {
                id: id
            })
            .then((response => {
                setEditData(response.data);
            }))
            .catch(() => {
                console.log('通信に失敗しました')
            });
    }

    function updatePost(){
        if (editData == '') {
            return;
        }

        axios
            .post('/api/post/update',{
                id: id,
                name: editData.name,
                content: editData.content,
            })
            .then((response) => {
                setEditData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    function inputChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        editData[key] = value;
        let data = Object.assign({}, editData);
        setEditData(data);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h1>タスク編集</h1>
                        <Card className={classes.card} >
                            <PostForm data={editData} inputChange={inputChange} btnFnc={updatePost} />
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostEdit;