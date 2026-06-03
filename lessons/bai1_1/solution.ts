import { createHash } from "crypto";

export type Block = {
  index: number;
  timestamp: string;
  transactions: any[];
  previous_hash: string;
  current_hash: string;
};

// ✍️ TODO: Viết hàm tại đây
// Hàm tính SHA 256 từ dữ liệu block
function calculateHash(block: Block): string {
  const data = 
    block.index.toString() +
    block.timestamp +
    JSON.stringify(block.transactions) +
    block.previous_hash;
  return createHash("sha256").update(data).digest("hex");
}
// Hàm kiểm tra block có hợp lệ hay không
export function isValidBlock(block: Block): boolean {
  const hash = calculateHash(block);
  return hash === block.current_hash;
}
