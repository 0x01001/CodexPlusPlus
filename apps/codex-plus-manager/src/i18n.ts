export type AppLanguage = "en" | "vi";

type TranslationEntry = {
  zh: string;
  en: string;
  vi: string;
};

export const languageOptions: Array<{ id: AppLanguage; label: string }> = [
  { id: "en", label: "English" },
  { id: "vi", label: "Tiếng Việt" },
];

const defaultLanguage: AppLanguage = "en";

const entries: TranslationEntry[] = [
  { zh: "管理控制台", en: "Management Console", vi: "Bảng điều khiển" },
  { zh: "概览", en: "Overview", vi: "Tổng quan" },
  { zh: "供应商配置", en: "Providers", vi: "Nhà cung cấp" },
  { zh: "会话管理", en: "Sessions", vi: "Phiên" },
  { zh: "工具与插件", en: "Tools and Plugins", vi: "Công cụ và plugin" },
  { zh: "页面增强", en: "Enhancements", vi: "Tăng cường" },
  { zh: "脚本市场", en: "Script Market", vi: "Chợ script" },
  { zh: "推荐内容", en: "Recommendations", vi: "Đề xuất" },
  { zh: "安装维护", en: "Maintenance", vi: "Bảo trì" },
  { zh: "关于", en: "About", vi: "Giới thiệu" },
  { zh: "设置", en: "Settings", vi: "Cài đặt" },
  { zh: "检查问题、启动与快速修复", en: "Check issues, launch, and quick repairs", vi: "Kiểm tra lỗi, khởi chạy và sửa nhanh" },
  { zh: "管理 API 供应商、协议、Key 与配置文件", en: "Manage API providers, protocols, keys, and config files", vi: "Quản lý provider API, giao thức, key và file cấu hình" },
  { zh: "查看、删除和修复 Codex 本地会话", en: "View, delete, and repair local Codex sessions", vi: "Xem, xóa và sửa phiên Codex cục bộ" },
  { zh: "独立管理 MCP、Skills、Plugins", en: "Manage MCP, skills, and plugins independently", vi: "Quản lý MCP, skill và plugin riêng biệt" },
  { zh: "会话删除、导出、项目移动和脚本能力", en: "Session delete, export, project move, and script features", vi: "Xóa phiên, xuất file, chuyển dự án và script" },
  { zh: "内置和用户自定义脚本清单", en: "Built-in and custom user scripts", vi: "Script tích hợp và script người dùng" },
  { zh: "赞助商推荐与普通推荐", en: "Sponsor and regular recommendations", vi: "Đề xuất tài trợ và thông thường" },
  { zh: "入口安装、修复、Watcher 与手动启动", en: "Entrypoints, repairs, watcher, and manual launch", vi: "Lối vào, sửa lỗi, watcher và khởi chạy thủ công" },
  { zh: "版本信息、项目链接、GitHub Release 更新、日志与诊断", en: "Version info, project links, GitHub releases, logs, and diagnostics", vi: "Thông tin phiên bản, liên kết dự án, GitHub Release, log và chẩn đoán" },
  { zh: "主题、命令包装器和启动参数", en: "Theme, command wrapper, and launch arguments", vi: "Giao diện, wrapper lệnh và tham số khởi chạy" },

  { zh: "基础设置", en: "Basic Settings", vi: "Cài đặt cơ bản" },
  { zh: "界面主题", en: "Interface Theme", vi: "Giao diện" },
  { zh: "当前为深色模式。", en: "Currently using dark mode.", vi: "Đang dùng chế độ tối." },
  { zh: "当前为浅色模式。", en: "Currently using light mode.", vi: "Đang dùng chế độ sáng." },
  { zh: "切换主题", en: "Switch Theme", vi: "Đổi giao diện" },
  { zh: "界面语言", en: "Interface Language", vi: "Ngôn ngữ giao diện" },
  { zh: "选择 Codex++ 管理工具和注入菜单使用的语言。", en: "Choose the language used by the Codex++ manager and injected menu.", vi: "Chọn ngôn ngữ cho trình quản lý Codex++ và menu được inject." },
  { zh: "语言设置", en: "Language Settings", vi: "Cài đặt ngôn ngữ" },
  { zh: "语言已更新。", en: "Language updated.", vi: "Đã cập nhật ngôn ngữ." },
  { zh: "供应商测试模型", en: "Provider Test Model", vi: "Model kiểm thử provider" },
  { zh: "例如 gpt-5.4-mini", en: "For example gpt-5.4-mini", vi: "Ví dụ gpt-5.4-mini" },
  { zh: "启用 Codex 命令包装器", en: "Enable Codex command wrapper", vi: "Bật wrapper lệnh Codex" },
  { zh: "包装器 Base URL", en: "Wrapper Base URL", vi: "Base URL của wrapper" },
  { zh: "API Key 环境变量", en: "API key environment variable", vi: "Biến môi trường API key" },
  { zh: "API Key", en: "API Key", vi: "API Key" },
  { zh: "保存设置", en: "Save Settings", vi: "Lưu cài đặt" },
  { zh: "重置设置", en: "Reset Settings", vi: "Đặt lại cài đặt" },
  { zh: "Codex 启动参数", en: "Codex Launch Arguments", vi: "Tham số khởi chạy Codex" },
  { zh: "启动 Codex App 时追加到默认 CDP 参数后。留空则保持默认启动行为。", en: "Appended after the default CDP arguments when launching Codex. Leave empty to keep the default behavior.", vi: "Được thêm sau tham số CDP mặc định khi khởi chạy Codex. Để trống để giữ hành vi mặc định." },
  { zh: "额外参数", en: "Extra Arguments", vi: "Tham số bổ sung" },
  { zh: "每行一个参数，例如 --force_high_performance_gpu。不需要填写 open 或 --args。", en: "One argument per line, for example --force_high_performance_gpu. Do not include open or --args.", vi: "Mỗi dòng một tham số, ví dụ --force_high_performance_gpu. Không cần nhập open hoặc --args." },

  { zh: "健康检查", en: "Health Check", vi: "Kiểm tra trạng thái" },
  { zh: "概览只展示关键问题，具体配置在对应页面处理", en: "The overview shows key issues only. Detailed configuration lives on the related pages.", vi: "Tổng quan chỉ hiển thị vấn đề chính. Cấu hình chi tiết nằm ở các trang tương ứng." },
  { zh: "Codex 版本", en: "Codex Version", vi: "Phiên bản Codex" },
  { zh: "未检测到 Codex 应用版本。", en: "Codex app version was not detected.", vi: "Chưa phát hiện phiên bản ứng dụng Codex." },
  { zh: "检查", en: "Check", vi: "Kiểm tra" },
  { zh: "修复入口", en: "Repair Entrypoints", vi: "Sửa lối vào" },
  { zh: "修复后端", en: "Repair Backend", vi: "Sửa backend" },
  { zh: "最近启动", en: "Latest Launch", vi: "Lần khởi chạy gần nhất" },
  { zh: "启动 Codex++", en: "Launch Codex++", vi: "Khởi chạy Codex++" },
  { zh: "最新状态来自静默入口，重启 Codex 后会刷新", en: "Latest status comes from the silent entrypoint and refreshes after restarting Codex.", vi: "Trạng thái mới nhất đến từ lối vào chạy ẩn và sẽ cập nhật sau khi khởi động lại Codex." },
  { zh: "暂无启动状态。", en: "No launch status yet.", vi: "Chưa có trạng thái khởi chạy." },
  { zh: "状态", en: "Status", vi: "Trạng thái" },
  { zh: "消息", en: "Message", vi: "Thông báo" },
  { zh: "时间", en: "Time", vi: "Thời gian" },

  { zh: "检查与修复", en: "Check and Repair", vi: "Kiểm tra và sửa" },
  { zh: "检查入口、Codex 应用和 Watcher 状态", en: "Check entrypoints, Codex app, and watcher status", vi: "Kiểm tra lối vào, ứng dụng Codex và trạng thái watcher" },
  { zh: "Codex 应用", en: "Codex App", vi: "Ứng dụng Codex" },
  { zh: "静默启动入口", en: "Silent Entrypoint", vi: "Lối vào chạy ẩn" },
  { zh: "管理工具入口", en: "Manager Entrypoint", vi: "Lối vào trình quản lý" },
  { zh: "管理控制台入口", en: "Manager Console Entrypoint", vi: "Lối vào bảng điều khiển" },
  { zh: "Watcher 自动接管", en: "Watcher Takeover", vi: "Watcher tự tiếp quản" },
  { zh: "修复快捷方式", en: "Repair Shortcuts", vi: "Sửa shortcut" },
  { zh: "入口管理", en: "Entrypoint Management", vi: "Quản lý lối vào" },
  { zh: "快捷方式写入系统实际桌面位置，不使用写死桌面路径", en: "Shortcuts are written to the system desktop location instead of a hard-coded path.", vi: "Shortcut được ghi vào vị trí Desktop thật của hệ thống, không dùng đường dẫn cố định." },
  { zh: "卸载时移除 Codex++ 托管数据", en: "Remove Codex++ managed data on uninstall", vi: "Xóa dữ liệu do Codex++ quản lý khi gỡ cài đặt" },
  { zh: "安装入口", en: "Install Entrypoints", vi: "Cài lối vào" },
  { zh: "卸载入口", en: "Uninstall Entrypoints", vi: "Gỡ lối vào" },
  { zh: "自动接管", en: "Auto Takeover", vi: "Tự tiếp quản" },
  { zh: "Watcher 用于保持 Codex++ 接管状态", en: "The watcher keeps Codex++ takeover active.", vi: "Watcher giúp duy trì trạng thái Codex++ tiếp quản." },
  { zh: "安装 watcher", en: "Install watcher", vi: "Cài watcher" },
  { zh: "移除 watcher", en: "Remove watcher", vi: "Gỡ watcher" },
  { zh: "启用", en: "Enable", vi: "Bật" },
  { zh: "禁用", en: "Disable", vi: "Tắt" },
  { zh: "Codex 应用路径", en: "Codex App Path", vi: "Đường dẫn ứng dụng Codex" },
  { zh: "免安装版或解包版只需要选择一次，之后静默启动会自动复用", en: "Portable or unpacked builds only need to be selected once. Silent launch will reuse it later.", vi: "Bản portable hoặc giải nén chỉ cần chọn một lần, các lần chạy ẩn sau sẽ tự dùng lại." },
  { zh: "保存路径", en: "Saved Path", vi: "Đường dẫn đã lưu" },
  { zh: "当前识别", en: "Detected Path", vi: "Đường dẫn phát hiện" },
  { zh: "保存的应用路径", en: "Saved App Path", vi: "Đường dẫn ứng dụng đã lưu" },
  { zh: "选择 Codex.exe、Codex.app、app 目录或解包目录", en: "Choose Codex.exe, Codex.app, the app folder, or an unpacked folder", vi: "Chọn Codex.exe, Codex.app, thư mục app hoặc thư mục đã giải nén" },
  { zh: "选择应用目录", en: "Choose App Folder", vi: "Chọn thư mục ứng dụng" },
  { zh: "选择 Codex.exe", en: "Choose Codex.exe", vi: "Chọn Codex.exe" },
  { zh: "清除保存路径", en: "Clear Saved Path", vi: "Xóa đường dẫn đã lưu" },
  { zh: "手动启动", en: "Manual Launch", vi: "Khởi chạy thủ công" },
  { zh: "应用路径留空时使用已保存路径；没有保存路径时使用自动探测", en: "Leave the app path empty to use the saved path. If none is saved, auto-detection is used.", vi: "Để trống đường dẫn để dùng đường dẫn đã lưu. Nếu chưa lưu, hệ thống sẽ tự dò." },
  { zh: "应用路径覆盖", en: "App Path Override", vi: "Ghi đè đường dẫn ứng dụng" },
  { zh: "保存为默认路径", en: "Save as Default Path", vi: "Lưu làm đường dẫn mặc định" },

  { zh: "最近日志", en: "Recent Logs", vi: "Log gần đây" },
  { zh: "暂无日志。", en: "No logs yet.", vi: "Chưa có log." },
  { zh: "刷新", en: "Refresh", vi: "Làm mới" },
  { zh: "复制", en: "Copy", vi: "Sao chép" },
  { zh: "诊断报告", en: "Diagnostics Report", vi: "Báo cáo chẩn đoán" },
  { zh: "包含版本、路径、设置和平台信息", en: "Includes version, paths, settings, and platform information", vi: "Bao gồm phiên bản, đường dẫn, cài đặt và thông tin nền tảng" },
  { zh: "尚未生成诊断报告。", en: "No diagnostics report has been generated yet.", vi: "Chưa tạo báo cáo chẩn đoán." },
  { zh: "重新生成", en: "Regenerate", vi: "Tạo lại" },
  { zh: "复制报告", en: "Copy Report", vi: "Sao chép báo cáo" },

  { zh: "GitHub Release 更新", en: "GitHub Release Updates", vi: "Cập nhật GitHub Release" },
  { zh: "最新版本", en: "Latest Version", vi: "Phiên bản mới nhất" },
  { zh: "资源", en: "Asset", vi: "Tệp phát hành" },
  { zh: "进度", en: "Progress", vi: "Tiến độ" },
  { zh: "未检查", en: "Not checked", vi: "Chưa kiểm tra" },
  { zh: "尚未检查 GitHub Release；更新会下载并启动安装包。", en: "GitHub Release has not been checked yet. Updating will download and run the installer.", vi: "Chưa kiểm tra GitHub Release. Cập nhật sẽ tải và chạy bộ cài." },
  { zh: "检查更新", en: "Check Updates", vi: "Kiểm tra cập nhật" },
  { zh: "下载并运行安装包", en: "Download and Run Installer", vi: "Tải và chạy bộ cài" },

  { zh: "已找到", en: "Found", vi: "Đã tìm thấy" },
  { zh: "缺失", en: "Missing", vi: "Thiếu" },
  { zh: "已安装", en: "Installed", vi: "Đã cài" },
  { zh: "正常", en: "OK", vi: "Ổn" },
  { zh: "运行中", en: "Running", vi: "Đang chạy" },
  { zh: "失败", en: "Failed", vi: "Thất bại" },
  { zh: "已归档", en: "Archived", vi: "Đã lưu trữ" },
  { zh: "已受理", en: "Accepted", vi: "Đã nhận" },
  { zh: "未实现", en: "Not implemented", vi: "Chưa hỗ trợ" },
  { zh: "已禁用", en: "Disabled", vi: "Đã tắt" },
  { zh: "未知", en: "Unknown", vi: "Không rõ" },
  { zh: "打开", en: "Open", vi: "Mở" },
  { zh: "删除", en: "Delete", vi: "Xóa" },
  { zh: "关闭", en: "Off", vi: "Tắt" },
  { zh: "开启", en: "On", vi: "Bật" },
  { zh: "内置", en: "Built-in", vi: "Tích hợp" },
  { zh: "用户", en: "User", vi: "Người dùng" },
  { zh: "重启 Codex++", en: "Restart Codex++", vi: "Khởi động lại Codex++" },
  { zh: "刷新当前页面", en: "Refresh current page", vi: "Làm mới trang hiện tại" },
  { zh: "切换到浅色", en: "Switch to light mode", vi: "Chuyển sang chế độ sáng" },
  { zh: "切换到深色", en: "Switch to dark mode", vi: "Chuyển sang chế độ tối" },
];

const translationMaps = buildTranslationMaps(entries);

export function normalizeLanguage(value: unknown): AppLanguage {
  const normalized = String(value ?? "").trim().toLowerCase();
  if (normalized === "vi" || normalized === "vi-vn") return "vi";
  if (normalized === "en" || normalized === "en-us" || normalized === "en-gb") return "en";
  return defaultLanguage;
}

export function loadInitialLanguage(): AppLanguage {
  if (typeof window === "undefined") return defaultLanguage;
  const stored = window.localStorage.getItem("codex-plus-language");
  if (stored) return normalizeLanguage(stored);
  return normalizeLanguage(window.navigator.language);
}

export function applyTranslations(language: AppLanguage, root: ParentNode = document): void {
  translateTextNodes(language, root);
  translateAttributes(language, root);
}

export function translateText(language: AppLanguage, value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return value;
  const translated = translationMaps[language].get(trimmed) ?? translatePattern(language, trimmed);
  if (!translated || translated === trimmed) return value;
  return value.replace(trimmed, translated);
}

function buildTranslationMaps(items: TranslationEntry[]): Record<AppLanguage, Map<string, string>> {
  const maps: Record<AppLanguage, Map<string, string>> = {
    en: new Map(),
    vi: new Map(),
  };
  for (const item of items) {
    const sources = [item.zh, item.en, item.vi];
    for (const source of sources) {
      maps.en.set(source, item.en);
      maps.vi.set(source, item.vi);
    }
  }
  return maps;
}

function translatePattern(language: AppLanguage, text: string): string | null {
  const currentVersion = /^(?:当前版本|Current version|Phiên bản hiện tại)\s+(.+)$/.exec(text);
  if (currentVersion) return language === "vi" ? `Phiên bản hiện tại ${currentVersion[1]}` : `Current version ${currentVersion[1]}`;

  const updateVersion = /^(?:发现新版本|New version found|Phát hiện phiên bản mới)\s+(.+)$/.exec(text);
  if (updateVersion) return language === "vi" ? `Phát hiện phiên bản mới ${updateVersion[1]}` : `New version found ${updateVersion[1]}`;

  const count = /^(.+)\s+(?:条|items|mục)$/.exec(text);
  if (count && /^\d+$/.test(count[1])) return language === "vi" ? `${count[1]} mục` : `${count[1]} items`;

  const marketSource = /^(?:市场|Market|Chợ)\s+·\s+(.+)$/.exec(text);
  if (marketSource) return language === "vi" ? `Chợ · ${marketSource[1]}` : `Market · ${marketSource[1]}`;

  return null;
}

function translateTextNodes(language: AppLanguage, root: ParentNode): void {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || shouldSkipElement(parent)) return NodeFilter.FILTER_REJECT;
      return node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    },
  });
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  for (const node of nodes) {
    const next = translateText(language, node.textContent ?? "");
    if (next !== node.textContent) node.textContent = next;
  }
}

function translateAttributes(language: AppLanguage, root: ParentNode): void {
  const elements = root instanceof Element ? [root, ...Array.from(root.querySelectorAll("[title], [placeholder], [aria-label], [alt]"))] : Array.from(root.querySelectorAll("[title], [placeholder], [aria-label], [alt]"));
  for (const element of elements) {
    if (shouldSkipElement(element, { allowFormControl: true })) continue;
    for (const attr of ["title", "placeholder", "aria-label", "alt"]) {
      const value = element.getAttribute(attr);
      if (!value) continue;
      const next = translateText(language, value);
      if (next !== value) element.setAttribute(attr, next);
    }
  }
}

function shouldSkipElement(element: Element, options: { allowFormControl?: boolean } = {}): boolean {
  if (element.closest("[data-i18n-ignore], .log-lines, .log-view")) return true;
  const tagName = element.tagName;
  if (["SCRIPT", "STYLE", "CODE", "PRE", "KBD", "SAMP"].includes(tagName)) return true;
  if (!options.allowFormControl && ["TEXTAREA", "INPUT", "SELECT", "OPTION"].includes(tagName)) return true;
  return false;
}
