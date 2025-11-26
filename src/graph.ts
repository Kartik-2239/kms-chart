const TOTAL_YEARS = 7
const MAX_KMS = 100

export function createData(followers: number, posts: number): {name: string, kms: number}[] {
    const data: {name: string, kms: number}[] = []
    if (followers/posts > 1){
        const offset = 12
        data.push({name: '1', kms: MAX_KMS})
        for (let i = 1; i < TOTAL_YEARS-1; i++){
            data.push({name: (i + 1).toString(), kms: (Math.random()*90 - i *offset)})
        }
    }
    if (followers/posts <= 0.3){
        const offset = 32
        data.push({name: '1', kms: 0})
        const limit = Math.floor(Math.random()*4)
        for (let i = 1; i < TOTAL_YEARS-limit; i++){
            data.push({name: (i + 1).toString(), kms: (Math.random()*30 + i *offset)})
        }
        for (let i = TOTAL_YEARS-limit; i < TOTAL_YEARS; i++){
            // data.push({name: (i + 1).toString(), kms: (Math.random()*30 + i *12)})
            data.push({name: (i + 1).toString(), kms: MAX_KMS})
        }
    }
    if (followers/posts > 0.3 && followers/posts <= 1){
        const multiplier = 2
        data.push({name: '1', kms: MAX_KMS})
        for (let i = 1; i < TOTAL_YEARS-1; i++){
            data.push({name: (i + 1).toString(), kms: (Math.random()*90 - i * multiplier)})
        }
    }
    return data
}