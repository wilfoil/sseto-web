import { ChangeEvent, DragEvent, useEffect, useState } from "react";
import styled from '@emotion/styled'
import { Add } from "@mui/icons-material";

interface IState {files: File[], urls: string[]}

const Container = styled.section`
border: 2px dashed #666;
height: 5em;
display: flex;
overflow-y: auto;
`

const Item = styled.div<any>`
    width: ${({ file })=> file ? '100px' : '100%'};
    min-width: 100px;
    height: 100%;
    display: flex;
    background: #e7e7e71a;
    > * { margin: auto }
    img { width: 100%; object-fit: cover;height: 100%;}
`
const MediaUpload = ({fileUrls, handleChange}: { fileUrls?: string[], handleChange?: (files: File[]) => void}) => {
    const [state, setState] = useState<IState>({files: [], urls: []});

    useEffect(()=>{
        if (fileUrls?.length) setState(prev => ({...prev, urls: fileUrls}))
    }, [fileUrls])

    const handleFiles = (filesArr: FileList | File[]) => {
        const filesState: IState = Array.from(filesArr || []).reduce((acc: IState, curr) => {
            acc.files.push(curr);
            acc.urls.push(URL.createObjectURL(curr));
            return acc;
        }, {files: [], urls: []})
        setState(({urls, files}) => ({ files: [...files, ...filesState.files], urls: [...urls, ...filesState.urls]}));
        handleChange?.([...state.files, ...filesState.files])
    }
    const handleDragOver = (event: DragEvent) => {
        event.preventDefault();
    }
    const handleOnDrop = (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
        const dropFiles = event.dataTransfer.files;
        handleFiles(dropFiles);
    }

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target?.files?.length) handleFiles(e.target.files)
    }

    return (
        <Container>
            <Item onDragOver={handleDragOver} onDrop={handleOnDrop} >
                <Add color="primary" />
                <input
                    type="file"
                    multiple={true}
                    accept='image/*'
                    hidden={true}
                    onChange={onFileChange}
                />
            </Item>
            {state.urls.map(url => <Item key={url} file={true}>
                <img src={url} alt="" />
                </Item>)}
        </Container>
    )
}

export default MediaUpload;