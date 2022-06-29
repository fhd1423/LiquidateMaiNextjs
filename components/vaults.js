import React from 'react'

export default function Home({ vaults }) {
    return (
        <div>
            {vaults?.map((vault)=> (
                <div key = {vault.cost}>{(Math.floor(100*vault.cost))/100}</div>
            ))}
        </div>
    );
}
 