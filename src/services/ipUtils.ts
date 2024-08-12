export function isPrivateIP(ip: string): boolean {
  const privateRanges = [
    /^10\./, /* 10.0.0.0 - 10.255.255.255 */
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./, /* 172.16.0.0 - 172.31.255.255 */
    /^192\.168\./, /* 192.168.0.0 - 192.168.255.255 */
    /^127\./, /* 127.0.0.0 -  127.255.255.255 (localhost)  */
    /^::1$/, /* IPv6 localhost */
    /^fc00:/, /* IPv6 ULA */
    /^fe80:/, /* IPv6 link-local */
  ];
  return privateRanges.some((range) => range.test(ip));
}
