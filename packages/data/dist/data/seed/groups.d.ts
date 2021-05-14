import type { Group } from ".prisma/client";
export declare const createMockGroup: (data: Partial<Group>) => Group;
export declare const createDefaultGroups: () => Promise<any[]>;
