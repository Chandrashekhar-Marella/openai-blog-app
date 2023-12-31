import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import Configuration from "openai"
import CreateChatCompletionResponse from "openai"
import ChatCompletionRequestMessage from 'openai';

import { AxiosResponse } from 'axios';

const openai = new OpenAI( {
    apiKey: process.env.OPENAI_API_KEY,
} );

export async function POST ( request: Request, response: any )
{
    try
    {
        const { title, role } = await request.json();

        const aiResponse= await openai.chat.completions.create( {
                model: "gpt-4-1106-preview",
                messages: [
                    {
                        role: "user",
                        // content: `Create small blog post with html tags based on this title: ${title}`,
                        content: `Create 2 line blog post with html tags based on this title: ${ title }`,
                    },
                    {
                        role: "system",
                        content: `${ role || "I am a helpful assistant"
                            }. Write with html tags.`,
                    },
                ],
            } );

        // response.revalidate("/api/posts")

        return NextResponse.json(
            {
                content: aiResponse.choices[ 0 ].message.content,
            },
            { status: 200 }
        );

    } catch ( error )
    {
        console.error( "request error", error );
        NextResponse.json( { error: "error updating post" }, { status: 500 } );
    }
}