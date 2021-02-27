import React from "react";


export const ArticlePage = (props) => {

    return (
        <div>
            <h3>{props.title.title}</h3>

            <h4>{props.author.name}</h4>
            <article>
                {props.body.body}
            </article>
        </div>
    )
}
