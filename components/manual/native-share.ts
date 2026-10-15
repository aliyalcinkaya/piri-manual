export async function nativeShare(data:{title:string;url:string},share?: (data:{title:string;url:string})=>Promise<void>):Promise<'shared'|'cancelled'|'fallback'>{
  if(!share)return 'fallback'
  try{await share(data);return 'shared'}catch(error){return error instanceof Error&&error.name==='AbortError'?'cancelled':'fallback'}
}
