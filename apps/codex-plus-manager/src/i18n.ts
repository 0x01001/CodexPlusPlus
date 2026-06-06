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

  { zh: "Codex 工具与插件", en: "Codex Tools and Plugins", vi: "Công cụ và plugin Codex" },
  { zh: "独立管理 Codex 的 MCP、Skills、Plugins；切换任意供应商都会带上。", en: "Manage Codex MCP, skills, and plugins independently. They are included when switching any provider.", vi: "Quản lý MCP, skill và plugin của Codex riêng biệt. Chúng sẽ được kèm theo khi chuyển bất kỳ provider nào." },
  { zh: "MCP、Skills、Plugins 作为全局配置独立管理，切换任意供应商都会合并。", en: "MCP, skills, and plugins are managed as independent global config and merged when switching any provider.", vi: "MCP, skill và plugin được quản lý như cấu hình toàn cục riêng biệt và được gộp khi chuyển bất kỳ provider nào." },
  { zh: "MCP", en: "MCP", vi: "MCP" },
  { zh: "Skills", en: "Skills", vi: "Kỹ năng" },
  { zh: "Plugins", en: "Plugins", vi: "Plugin" },
  { zh: "插件", en: "Plugins", vi: "Plugin" },
  { zh: "扩展项", en: "Extension", vi: "Tiện ích" },
  { zh: "新增", en: "Add", vi: "Thêm" },
  { zh: "禁用此扩展项", en: "Disable this extension", vi: "Tắt tiện ích này" },
  { zh: "启用此扩展项", en: "Enable this extension", vi: "Bật tiện ích này" },
  { zh: "编辑扩展项", en: "Edit extension", vi: "Sửa tiện ích" },
  { zh: "删除扩展项", en: "Delete extension", vi: "Xóa tiện ích" },
  { zh: "类型", en: "Type", vi: "Loại" },
  { zh: "例如 context7", en: "For example context7", vi: "Ví dụ context7" },
  { zh: "TOML 配置体", en: "TOML config body", vi: "Nội dung cấu hình TOML" },
  { zh: "只填写表头下面的内容，例如：\ncommand = \"npx\"\nargs = [\"-y\", \"@upstash/context7-mcp\"]", en: "Only enter the content below the table header, for example:\ncommand = \"npx\"\nargs = [\"-y\", \"@upstash/context7-mcp\"]", vi: "Chỉ nhập nội dung bên dưới header của bảng, ví dụ:\ncommand = \"npx\"\nargs = [\"-y\", \"@upstash/context7-mcp\"]" },
  { zh: "保存扩展项", en: "Save Extension", vi: "Lưu tiện ích" },
  { zh: "取消", en: "Cancel", vi: "Hủy" },
  { zh: "config.toml 预览", en: "config.toml Preview", vi: "Xem trước config.toml" },
  { zh: "当前供应商切换后会写入的预览；上下文开关变化会立即反映", en: "Preview written after switching the current provider. Context toggles are reflected immediately.", vi: "Bản xem trước sẽ được ghi sau khi chuyển provider hiện tại. Thay đổi bật/tắt ngữ cảnh sẽ hiển thị ngay." },
  { zh: "切换到此供应商时会写入的预览；上下文开关变化会立即反映", en: "Preview written when switching to this provider. Context toggles are reflected immediately.", vi: "Bản xem trước sẽ được ghi khi chuyển sang provider này. Thay đổi bật/tắt ngữ cảnh sẽ hiển thị ngay." },
  { zh: "通用配置文件", en: "Common Config File", vi: "File cấu hình chung" },
  { zh: "只保留非 MCP、Skills、Plugins 的跨供应商配置；工具与插件在独立页面管理。", en: "Keep only cross-provider config that is not MCP, skills, or plugins. Tools and plugins are managed on their own page.", vi: "Chỉ giữ cấu hình dùng chung giữa provider không thuộc MCP, skill hoặc plugin. Công cụ và plugin được quản lý ở trang riêng." },

  { zh: "当前 provider", en: "Current provider", vi: "Provider hiện tại" },
  { zh: "配置", en: "Config", vi: "Cấu hình" },
  { zh: "会话", en: "Sessions", vi: "Phiên" },
  { zh: "索引", en: "Index", vi: "Chỉ mục" },
  { zh: "手动", en: "Manual", vi: "Thủ công" },
  { zh: "当前", en: "Current", vi: "Hiện tại" },
  { zh: "发现", en: "Found", vi: "Đã phát hiện" },
  { zh: "默认中转", en: "Default Relay", vi: "Relay mặc định" },
  { zh: "调用失败", en: "Call Failed", vi: "Gọi lệnh thất bại" },
  { zh: "概览已检查", en: "Overview Checked", vi: "Đã kiểm tra tổng quan" },
  { zh: "设置已加载", en: "Settings Loaded", vi: "Đã tải cài đặt" },
  { zh: "本地脚本", en: "Local Scripts", vi: "Script cục bộ" },
  { zh: "登录状态", en: "Login Status", vi: "Trạng thái đăng nhập" },
  { zh: "配置文件", en: "Config Files", vi: "File cấu hình" },
  { zh: "日志已刷新", en: "Logs Refreshed", vi: "Đã làm mới log" },
  { zh: "诊断已生成", en: "Diagnostics Generated", vi: "Đã tạo chẩn đoán" },
  { zh: "Watcher 状态", en: "Watcher Status", vi: "Trạng thái watcher" },
  { zh: "启动任务", en: "Launch Task", vi: "Tác vụ khởi chạy" },
  { zh: "后端修复", en: "Backend Repair", vi: "Sửa backend" },
  { zh: "入口安装", en: "Entrypoint Install", vi: "Cài lối vào" },
  { zh: "入口卸载", en: "Entrypoint Uninstall", vi: "Gỡ lối vào" },
  { zh: "快捷方式修复", en: "Shortcut Repair", vi: "Sửa shortcut" },
  { zh: "Watcher 操作", en: "Watcher Action", vi: "Thao tác watcher" },
  { zh: "GitHub Release 检查", en: "GitHub Release Check", vi: "Kiểm tra GitHub Release" },
  { zh: "更新安装", en: "Update Install", vi: "Cài cập nhật" },
  { zh: "设置保存", en: "Save Settings", vi: "Lưu cài đặt" },
  { zh: "联动 cc-switch", en: "cc-switch Link", vi: "Liên kết cc-switch" },
  { zh: "设置重置", en: "Reset Settings", vi: "Đặt lại cài đặt" },
  { zh: "Provider 同步目标", en: "Provider Sync Target", vi: "Mục tiêu đồng bộ provider" },
  { zh: "尚未运行历史会话修复。", en: "History session repair has not run yet.", vi: "Chưa chạy sửa phiên lịch sử." },
  { zh: "正在扫描历史会话与索引…", en: "Scanning history sessions and index...", vi: "Đang quét phiên lịch sử và chỉ mục..." },
  { zh: "正在检查会话 provider 标记…", en: "Checking session provider markers...", vi: "Đang kiểm tra nhãn provider của phiên..." },
  { zh: "正在写入修复与备份…", en: "Writing repairs and backups...", vi: "Đang ghi bản sửa và sao lưu..." },
  { zh: "历史会话修复", en: "History Session Repair", vi: "Sửa phiên lịch sử" },
  { zh: "历史会话修复失败，请查看错误提示后重试。", en: "History session repair failed. Check the error and try again.", vi: "Sửa phiên lịch sử thất bại. Hãy xem lỗi rồi thử lại." },
  { zh: "官方混入 API Key", en: "Official Login With API Key", vi: "Đăng nhập chính thức kèm API Key" },
  { zh: "页面增强模式", en: "Page Enhancement Mode", vi: "Chế độ tăng cường trang" },
  { zh: "纯 API 模式", en: "Pure API Mode", vi: "Chế độ pure API" },
  { zh: "官方登录模式", en: "Official Login Mode", vi: "Chế độ đăng nhập chính thức" },
  { zh: "供应商测试", en: "Provider Test", vi: "Kiểm thử provider" },
  { zh: "模型列表", en: "Model List", vi: "Danh sách model" },
  { zh: "供应商切换", en: "Provider Switch", vi: "Chuyển provider" },
  { zh: "供应商配置已关闭", en: "Provider Config Disabled", vi: "Cấu hình provider đang tắt" },
  { zh: "当前不会写入 Codex config.toml / auth.json。打开供应商配置总开关后再切换。", en: "Codex config.toml/auth.json will not be written right now. Turn on the provider config master switch before switching.", vi: "Hiện sẽ không ghi Codex config.toml/auth.json. Hãy bật công tắc cấu hình provider trước khi chuyển." },
  { zh: "供应商配置可能不正确", en: "Provider Config May Be Incorrect", vi: "Cấu hình provider có thể chưa đúng" },
  { zh: "目标供应商已不在 cc-switch 或本地配置中，请刷新供应商列表后重试。", en: "The target provider is no longer in cc-switch or local config. Refresh the provider list and try again.", vi: "Provider đích không còn trong cc-switch hoặc cấu hình cục bộ. Hãy làm mới danh sách provider rồi thử lại." },
  { zh: "读取当前配置文件失败，已停止切换以避免覆盖用户改动。", en: "Failed to read the current config files. Switching stopped to avoid overwriting user changes.", vi: "Không đọc được file cấu hình hiện tại. Đã dừng chuyển để tránh ghi đè thay đổi của người dùng." },
  { zh: "复制失败", en: "Copy Failed", vi: "Sao chép thất bại" },
  { zh: "打开链接", en: "Open Link", vi: "Mở liên kết" },
  { zh: "Codex 应用路径", en: "Codex App Path", vi: "Đường dẫn ứng dụng Codex" },
  { zh: "应用路径已保存，之后启动会自动复用。", en: "App path saved. Future launches will reuse it automatically.", vi: "Đã lưu đường dẫn ứng dụng. Các lần khởi chạy sau sẽ tự dùng lại." },
  { zh: "已清除保存路径，后续启动会回到自动探测。", en: "Saved path cleared. Future launches will return to auto-detection.", vi: "Đã xóa đường dẫn đã lưu. Các lần khởi chạy sau sẽ quay lại tự dò." },
  { zh: "请先填写或选择应用路径。", en: "Enter or choose an app path first.", vi: "Hãy nhập hoặc chọn đường dẫn ứng dụng trước." },
  { zh: "日志已复制。", en: "Logs copied.", vi: "Đã sao chép log." },
  { zh: "诊断报告已复制。", en: "Diagnostics report copied.", vi: "Đã sao chép báo cáo chẩn đoán." },
  { zh: "检查完成", en: "Check Complete", vi: "Kiểm tra hoàn tất" },
  { zh: "已刷新 Codex 应用、入口和 Watcher 状态。", en: "Codex app, entrypoint, and watcher status refreshed.", vi: "Đã làm mới trạng thái ứng dụng Codex, lối vào và watcher." },
  { zh: "选择 Codex 应用目录", en: "Choose Codex App Folder", vi: "Chọn thư mục ứng dụng Codex" },
  { zh: "选择 Codex.exe 或 Codex.app", en: "Choose Codex.exe or Codex.app", vi: "Chọn Codex.exe hoặc Codex.app" },
  { zh: "Codex 应用", en: "Codex App", vi: "Ứng dụng Codex" },
  { zh: "暂无状态文件", en: "No status file yet", vi: "Chưa có file trạng thái" },

  { zh: "供应商列表", en: "Provider List", vi: "Danh sách provider" },
  { zh: "启用供应商配置切换", en: "Enable provider config switching", vi: "Bật chuyển cấu hình provider" },
  { zh: "关闭后本工具不会在手动切换时写入 Codex 的 config.toml / auth.json；启动 Codex 时始终不会自动改这些文件。", en: "When off, this tool will not write Codex config.toml/auth.json during manual switching. Launching Codex never changes these files automatically.", vi: "Khi tắt, công cụ sẽ không ghi config.toml/auth.json của Codex khi chuyển thủ công. Việc khởi chạy Codex sẽ không tự sửa các file này." },
  { zh: "开启后读取 cc-switch Codex 供应商并保存时回写；同时使用多个管理工具可能导致 config.toml / auth.json 被反复覆盖。", en: "When on, cc-switch Codex providers are read and written back on save. Using multiple managers can repeatedly overwrite config.toml/auth.json.", vi: "Khi bật, provider Codex từ cc-switch sẽ được đọc và ghi ngược khi lưu. Dùng nhiều công cụ quản lý có thể khiến config.toml/auth.json bị ghi đè lặp lại." },
  { zh: "添加供应商", en: "Add Provider", vi: "Thêm provider" },
  { zh: "官方登录", en: "Official Login", vi: "Đăng nhập chính thức" },
  { zh: "纯 API", en: "Pure API", vi: "Pure API" },
  { zh: "混入 API KEY", en: "Mix in API KEY", vi: "Dùng kèm API KEY" },
  { zh: "混入 API Key", en: "Mix in API Key", vi: "Dùng kèm API Key" },
  { zh: "不写 API 文件", en: "Do not write API files", vi: "Không ghi file API" },
  { zh: "未填写 URL", en: "URL not filled", vi: "Chưa nhập URL" },
  { zh: "页面功能增强", en: "Page Enhancements", vi: "Tăng cường trang" },
  { zh: "会话删除、导出、项目移动、Timeline 和用户脚本等界面能力", en: "Session delete, export, project move, timeline, user scripts, and other UI features", vi: "Các tính năng UI như xóa phiên, xuất, chuyển dự án, timeline và script người dùng" },
  { zh: "启用 Codex++ 页面增强", en: "Enable Codex++ page enhancements", vi: "Bật tăng cường trang Codex++" },
  { zh: "关闭后会停用删除、导出、项目移动、Timeline、插件相关和菜单位置增强。", en: "Disables delete, export, project move, timeline, plugin, and menu placement enhancements.", vi: "Tắt xóa, xuất, chuyển dự án, timeline, plugin và tăng cường vị trí menu." },
  { zh: "当前为兼容增强模式，插件市场解锁、强制解锁入口和特殊插件强制安装不会启用；其他页面功能仍可用。", en: "Compatible enhancement mode is active. Plugin marketplace unlock, force entry unlock, and force special plugin install are not enabled; other page features still work.", vi: "Đang ở chế độ tăng cường tương thích. Mở khóa chợ plugin, buộc mở lối vào và buộc cài plugin đặc biệt sẽ không bật; các tính năng trang khác vẫn dùng được." },
  { zh: "插件市场解锁", en: "Plugin Marketplace Unlock", vi: "Mở khóa chợ plugin" },
  { zh: "API Key 模式下扩展插件市场请求，尽量显示完整插件列表；官方/混合模式通常不需要。", en: "Expands plugin marketplace requests in API key mode to show a fuller plugin list. Official/mixed modes usually do not need it.", vi: "Mở rộng request chợ plugin trong chế độ API key để hiển thị danh sách đầy đủ hơn. Chế độ chính thức/hỗn hợp thường không cần." },
  { zh: "强制解锁入口", en: "Force Unlock Entry", vi: "Buộc mở lối vào" },
  { zh: "恢复 1.1.9 的入口解锁方式，强制显示并启用插件入口。", en: "Restores the 1.1.9 entry unlock behavior to force-show and enable the plugin entry.", vi: "Khôi phục cách mở lối vào của 1.1.9 để buộc hiển thị và bật lối vào plugin." },
  { zh: "特殊插件强制安装", en: "Force Special Plugin Install", vi: "Buộc cài plugin đặc biệt" },
  { zh: "解除 App unavailable / 应用不可用导致的前端安装禁用。", en: "Removes frontend install blocking caused by App unavailable states.", vi: "Gỡ chặn cài đặt frontend do trạng thái App unavailable / ứng dụng không khả dụng." },
  { zh: "模型白名单解锁", en: "Model Whitelist Unlock", vi: "Mở khóa whitelist model" },
  { zh: "从环境变量和 config.toml 的 /v1/models 拉取模型并补进模型列表。", en: "Fetches models from /v1/models in environment variables and config.toml, then adds them to the model list.", vi: "Lấy model từ /v1/models trong biến môi trường và config.toml rồi thêm vào danh sách model." },
  { zh: "Fast 按钮", en: "Fast Button", vi: "Nút Fast" },
  { zh: "显示服务模式切换按钮，可控制 Standard / Fast / priority。", en: "Shows service mode controls for Standard / Fast / priority.", vi: "Hiển thị nút đổi service mode để điều khiển Standard / Fast / priority." },
  { zh: "会话删除", en: "Session Delete", vi: "Xóa phiên" },
  { zh: "在会话列表悬停显示删除按钮，并支持撤销。", en: "Shows a delete button on session hover and supports undo.", vi: "Hiển thị nút xóa khi rê chuột trên danh sách phiên và hỗ trợ hoàn tác." },
  { zh: "Markdown 导出", en: "Markdown Export", vi: "Xuất Markdown" },
  { zh: "在会话列表显示导出按钮，导出带时间戳的 Markdown。", en: "Shows an export button in the session list and exports timestamped Markdown.", vi: "Hiển thị nút xuất trong danh sách phiên và xuất Markdown có timestamp." },
  { zh: "会话项目移动", en: "Session Project Move", vi: "Chuyển dự án của phiên" },
  { zh: "把会话移动到普通对话或其他本地项目。", en: "Moves sessions to general chats or other local projects.", vi: "Chuyển phiên sang trò chuyện thường hoặc dự án cục bộ khác." },
  { zh: "对话 Timeline", en: "Conversation Timeline", vi: "Timeline hội thoại" },
  { zh: "在对话右侧显示用户提问时间线，支持摘要和跳转。", en: "Shows a question timeline on the right side of conversations with summaries and jump links.", vi: "Hiển thị timeline câu hỏi bên phải hội thoại, hỗ trợ tóm tắt và nhảy nhanh." },
  { zh: "对话居中宽度", en: "Centered Conversation Width", vi: "Độ rộng hội thoại căn giữa" },
  { zh: "把主对话和输入框限制到固定最大宽度，适合大屏阅读。", en: "Limits the main conversation and input box to a fixed max width for large screens.", vi: "Giới hạn hội thoại chính và ô nhập theo độ rộng tối đa cố định, phù hợp màn hình lớn." },
  { zh: "切换对话保留位置", en: "Restore Scroll Position", vi: "Khôi phục vị trí cuộn" },
  { zh: "切换 thread 时恢复上一次浏览位置。", en: "Restores the previous scroll position when switching threads.", vi: "Khôi phục vị trí đọc trước đó khi đổi thread." },
  { zh: "远程 SSH 文件引用可直接用 Zed Remote Development 打开。", en: "Remote SSH file references can open directly with Zed Remote Development.", vi: "Tham chiếu file SSH từ xa có thể mở trực tiếp bằng Zed Remote Development." },
  { zh: "从最新 upstream 分支创建 Git worktree。", en: "Creates a Git worktree from the latest upstream branch.", vi: "Tạo Git worktree từ nhánh upstream mới nhất." },
  { zh: "原生菜单栏位置", en: "Native Menu Bar Placement", vi: "Vị trí trên menu gốc" },
  { zh: "把 Codex++ 菜单插入 Codex 顶部原生菜单栏。", en: "Places the Codex++ menu in Codex's top native menu bar.", vi: "Chèn menu Codex++ vào thanh menu gốc phía trên của Codex." },
  { zh: "如果使用官方模式或官方混入 API 模式，通常不需要开启插件市场解锁、强制解锁入口和特殊插件强制安装。", en: "Official mode or official-with-API mode usually does not need plugin marketplace unlock, force entry unlock, or force special plugin install.", vi: "Chế độ chính thức hoặc chính thức kèm API thường không cần mở khóa chợ plugin, buộc mở lối vào hoặc buộc cài plugin đặc biệt." },
  { zh: "保存增强设置", en: "Save Enhancement Settings", vi: "Lưu cài đặt tăng cường" },

  { zh: "市场状态", en: "Market Status", vi: "Trạng thái chợ" },
  { zh: "尚未刷新", en: "Not refreshed yet", vi: "Chưa làm mới" },
  { zh: "远程脚本", en: "Remote Scripts", vi: "Script từ xa" },
  { zh: "本地整体", en: "Local Overall", vi: "Toàn bộ cục bộ" },
  { zh: "刷新市场", en: "Refresh Market", vi: "Làm mới chợ" },
  { zh: "投稿", en: "Submit", vi: "Gửi đóng góp" },
  { zh: "刷新本地", en: "Refresh Local", vi: "Làm mới cục bộ" },
  { zh: "市场脚本", en: "Market Scripts", vi: "Script trên chợ" },
  { zh: "从 GitHub 静态清单加载", en: "Loaded from the static GitHub manifest", vi: "Tải từ manifest tĩnh trên GitHub" },
  { zh: "点击刷新市场加载远程脚本。", en: "Click Refresh Market to load remote scripts.", vi: "Bấm Làm mới chợ để tải script từ xa." },
  { zh: "内置、手动和市场安装脚本；可在这里启停或删除用户脚本", en: "Built-in, manual, and market-installed scripts. Enable, disable, or delete user scripts here.", vi: "Script tích hợp, thủ công và cài từ chợ. Có thể bật, tắt hoặc xóa script người dùng tại đây." },
  { zh: "未发现用户脚本。", en: "No user scripts found.", vi: "Không tìm thấy script người dùng." },
  { zh: "未知作者", en: "Unknown Author", vi: "Không rõ tác giả" },
  { zh: "暂无描述。", en: "No description yet.", vi: "Chưa có mô tả." },
  { zh: "可更新", en: "Update Available", vi: "Có cập nhật" },
  { zh: "未安装", en: "Not Installed", vi: "Chưa cài" },
  { zh: "更新", en: "Update", vi: "Cập nhật" },
  { zh: "重新安装", en: "Reinstall", vi: "Cài lại" },
  { zh: "安装", en: "Install", vi: "Cài" },

  { zh: "会话总数", en: "Total Sessions", vi: "Tổng số phiên" },
  { zh: "读取 Codex 本地 state_5.sqlite，会删除数据库记录和对应 rollout 文件", en: "Reads Codex local state_5.sqlite. Deleting removes database records and matching rollout files.", vi: "Đọc state_5.sqlite cục bộ của Codex. Khi xóa sẽ xóa bản ghi cơ sở dữ liệu và file rollout tương ứng." },
  { zh: "未归档", en: "Unarchived", vi: "Chưa lưu trữ" },
  { zh: "数据库", en: "Database", vi: "Cơ sở dữ liệu" },
  { zh: "同步目标", en: "Sync Target", vi: "Mục tiêu đồng bộ" },
  { zh: "当前配置 provider", en: "Current config provider", vi: "Provider cấu hình hiện tại" },
  { zh: "刷新会话", en: "Refresh Sessions", vi: "Làm mới phiên" },
  { zh: "正在修复…", en: "Repairing...", vi: "Đang sửa..." },
  { zh: "立刻修复历史会话", en: "Repair History Sessions Now", vi: "Sửa phiên lịch sử ngay" },
  { zh: "正在修复历史会话", en: "Repairing History Sessions", vi: "Đang sửa phiên lịch sử" },
  { zh: "历史会话修复进度", en: "History Session Repair Progress", vi: "Tiến độ sửa phiên lịch sử" },
  { zh: "删除会创建本地备份；如果 Codex App 正在使用该会话，建议先关闭对应会话窗口再操作。", en: "Deleting creates a local backup. If Codex App is using this session, close that session window first.", vi: "Xóa sẽ tạo bản sao lưu cục bộ. Nếu Codex App đang dùng phiên này, nên đóng cửa sổ phiên đó trước." },
  { zh: "启动前自动修复历史会话", en: "Auto-repair history sessions before launch", vi: "Tự sửa phiên lịch sử trước khi khởi chạy" },
  { zh: "开启后，通过 Codex++ 启动 Codex 前自动整理一次旧对话的归属标记。", en: "When on, old conversation ownership markers are repaired once before launching Codex through Codex++.", vi: "Khi bật, nhãn sở hữu hội thoại cũ sẽ được sửa một lần trước khi khởi chạy Codex qua Codex++." },
  { zh: "保存自动修复设置", en: "Save Auto-repair Settings", vi: "Lưu cài đặt tự sửa" },
  { zh: "本地会话", en: "Local Sessions", vi: "Phiên cục bộ" },
  { zh: "按更新时间倒序显示", en: "Sorted by update time descending", vi: "Sắp xếp theo thời gian cập nhật giảm dần" },
  { zh: "点击刷新会话读取本地数据库", en: "Click Refresh Sessions to read the local database", vi: "Bấm Làm mới phiên để đọc cơ sở dữ liệu cục bộ" },
  { zh: "未命名会话", en: "Untitled Session", vi: "Phiên chưa đặt tên" },
  { zh: "未记录项目路径", en: "Project path not recorded", vi: "Chưa ghi đường dẫn dự án" },
  { zh: "provider 未记录", en: "provider not recorded", vi: "chưa ghi provider" },
  { zh: "未记录路径", en: "Path not recorded", vi: "Chưa ghi đường dẫn" },
  { zh: "未读取到本地会话，或当前 state_5.sqlite 不存在。", en: "No local sessions were read, or the current state_5.sqlite does not exist.", vi: "Không đọc được phiên cục bộ, hoặc state_5.sqlite hiện tại không tồn tại." },

  { zh: "与 Codex 内插件菜单使用同一个远端广告源", en: "Uses the same remote ad source as the plugin menu inside Codex", vi: "Dùng cùng nguồn quảng cáo từ xa với menu plugin trong Codex" },
  { zh: "尚未加载推荐内容", en: "Recommendations not loaded yet", vi: "Chưa tải đề xuất" },
  { zh: "内容来自 BigPizzaV3/Ad-List，分为赞助商推荐和普通推荐。", en: "Content comes from BigPizzaV3/Ad-List and is split into sponsor and regular recommendations.", vi: "Nội dung đến từ BigPizzaV3/Ad-List, gồm đề xuất tài trợ và đề xuất thông thường." },
  { zh: "刷新推荐", en: "Refresh Recommendations", vi: "Làm mới đề xuất" },
  { zh: "赞助商推荐", en: "Sponsor Recommendations", vi: "Đề xuất tài trợ" },
  { zh: "普通推荐", en: "Regular Recommendations", vi: "Đề xuất thông thường" },
  { zh: "暂无赞助商推荐。", en: "No sponsor recommendations yet.", vi: "Chưa có đề xuất tài trợ." },
  { zh: "暂无普通推荐。", en: "No regular recommendations yet.", vi: "Chưa có đề xuất thông thường." },

  { zh: "供应商列表", en: "Provider List", vi: "Danh sách provider" },
  { zh: "名称", en: "Name", vi: "Tên" },
  { zh: "接入模式", en: "Access Mode", vi: "Chế độ kết nối" },
  { zh: "配置模型", en: "Config Model", vi: "Model cấu hình" },
  { zh: "写入 config.toml 的 model 字段，例如 gpt-5", en: "Writes the model field in config.toml, for example gpt-5", vi: "Ghi trường model trong config.toml, ví dụ gpt-5" },
  { zh: "Codex 目标", en: "Codex Goals", vi: "Mục tiêu Codex" },
  { zh: "启用目标功能", en: "Enable goals", vi: "Bật mục tiêu" },
  { zh: "更多选项", en: "More Options", vi: "Tùy chọn khác" },
  { zh: "测试模型", en: "Test Model", vi: "Model kiểm thử" },
  { zh: "上下文大小", en: "Context Size", vi: "Kích thước ngữ cảnh" },
  { zh: "压缩上下文大小", en: "Auto-compact Limit", vi: "Giới hạn nén ngữ cảnh" },
  { zh: "留空不改写，例如 200000", en: "Leave empty to avoid overwriting, for example 200000", vi: "Để trống để không ghi đè, ví dụ 200000" },
  { zh: "留空不改写，例如 160000", en: "Leave empty to avoid overwriting, for example 160000", vi: "Để trống để không ghi đè, ví dụ 160000" },
  { zh: "填写中转服务 Base URL", en: "Enter relay service Base URL", vi: "Nhập Base URL của relay" },
  { zh: "输入中转服务的 API Key", en: "Enter the relay service API Key", vi: "Nhập API Key của relay" },
  { zh: "上游协议", en: "Upstream Protocol", vi: "Giao thức upstream" },
  { zh: "模型列表", en: "Model List", vi: "Danh sách model" },
  { zh: "每行一个模型，例如 qwen3-coder", en: "One model per line, for example qwen3-coder", vi: "Mỗi dòng một model, ví dụ qwen3-coder" },
  { zh: "从上游获取", en: "Fetch From Upstream", vi: "Lấy từ upstream" },
  { zh: "留空使用默认值", en: "Leave empty to use the default", vi: "Để trống để dùng mặc định" },
  { zh: "未命名供应商", en: "Untitled Provider", vi: "Provider chưa đặt tên" },
  { zh: "供应商配置总开关已关闭", en: "Provider config master switch is off", vi: "Công tắc cấu hình provider đang tắt" },
  { zh: "当前正在使用", en: "Currently in use", vi: "Đang sử dụng" },
  { zh: "设为当前", en: "Set Current", vi: "Đặt hiện tại" },
  { zh: "使用中", en: "In Use", vi: "Đang dùng" },
  { zh: "使用", en: "Use", vi: "Dùng" },
  { zh: "发送 hi 测试", en: "Send hi test", vi: "Gửi kiểm thử hi" },
  { zh: "编辑", en: "Edit", vi: "Sửa" },
  { zh: "删除供应商", en: "Delete Provider", vi: "Xóa provider" },
  { zh: "拖动排序", en: "Drag to sort", vi: "Kéo để sắp xếp" },
  { zh: "cc-switch 联动", en: "cc-switch linked", vi: "Đã liên kết cc-switch" },
  { zh: "本地", en: "Local", vi: "Cục bộ" },
  { zh: "新建供应商需要先保存到列表", en: "New providers must be saved to the list first", vi: "Provider mới cần được lưu vào danh sách trước" },
  { zh: "供应商配置总开关已关闭；当前只保存配置，不写入 Codex live 文件", en: "Provider config master switch is off. Only settings are saved; Codex live files are not written.", vi: "Công tắc cấu hình provider đang tắt. Chỉ lưu cấu hình, không ghi file live của Codex." },
  { zh: "联动 cc-switch；保存后会回写外部供应商数据库", en: "Linked to cc-switch. Saving writes back to the external provider database.", vi: "Đã liên kết cc-switch. Khi lưu sẽ ghi lại vào cơ sở dữ liệu provider bên ngoài." },
  { zh: "联动 cc-switch；当前未开启保存回写", en: "Linked to cc-switch. Write-back on save is currently off.", vi: "Đã liên kết cc-switch. Ghi lại khi lưu hiện đang tắt." },
  { zh: "编辑后保存列表，再切换模式时会使用新配置", en: "Save the list after editing; the new config is used on the next mode switch.", vi: "Lưu danh sách sau khi sửa; cấu hình mới sẽ dùng khi chuyển chế độ lần sau." },
  { zh: "供应商", en: "Provider", vi: "Provider" },
  { zh: "供", en: "P", vi: "P" },
  { zh: "Chat Completions 转 Responses", en: "Chat Completions to Responses", vi: "Chat Completions sang Responses" },
  { zh: "此上游会通过本地 127.0.0.1:57321 转成 Responses API，需要从 Codex++ 启动 Codex。", en: "This upstream is converted to the Responses API through local 127.0.0.1:57321. Launch Codex from Codex++ to use it.", vi: "Upstream này sẽ được chuyển sang Responses API qua 127.0.0.1:57321 cục bộ. Cần khởi chạy Codex từ Codex++ để dùng." },
  { zh: "当前供应商 config.toml 里没有可提取的通用配置。", en: "The current provider config.toml has no common config to extract.", vi: "config.toml của provider hiện tại không có cấu hình chung để trích xuất." },
  { zh: "当前使用中：打开时从 ~/.codex/auth.json 回填，保存后会作为此供应商 auth 存档", en: "Currently active: backfilled from ~/.codex/auth.json on open and archived as this provider's auth after saving", vi: "Đang dùng: khi mở sẽ điền từ ~/.codex/auth.json, sau khi lưu sẽ lưu trữ làm auth của provider này" },
  { zh: "切换到此供应商时会写入 ~/.codex/auth.json", en: "Written to ~/.codex/auth.json when switching to this provider", vi: "Sẽ ghi vào ~/.codex/auth.json khi chuyển sang provider này" },
  { zh: "此供应商会保留官方登录模式，并把请求混入当前 API Key；页面增强仍使用兼容模式。", en: "This provider keeps official login mode and mixes requests with the current API key. Page enhancements stay in compatible mode.", vi: "Provider này giữ chế độ đăng nhập chính thức và dùng request kèm API Key hiện tại. Tăng cường trang vẫn dùng chế độ tương thích." },
  { zh: "此供应商会切回官方登录模式，使用 ChatGPT 官方账号，不写入 API Key。", en: "This provider switches back to official login mode, uses the official ChatGPT account, and does not write an API key.", vi: "Provider này chuyển về chế độ đăng nhập chính thức, dùng tài khoản ChatGPT chính thức và không ghi API Key." },
  { zh: "此供应商会同时写入 config.toml 和 auth.json；API Key 也会注入到 provider bearer token。", en: "This provider writes both config.toml and auth.json. The API key is also injected into the provider bearer token.", vi: "Provider này sẽ ghi cả config.toml và auth.json. API Key cũng được inject vào bearer token của provider." },
  { zh: "当前未登录官方账号，也未配置混入 API 的 Base URL / Key。", en: "No official account is signed in, and the mixed API Base URL / Key is not configured.", vi: "Chưa đăng nhập tài khoản chính thức và chưa cấu hình Base URL / Key cho API dùng kèm." },
  { zh: "当前未登录官方账号；官方登录混入 API Key 需要先登录官方账号。", en: "No official account is signed in. Official login with mixed API key requires signing in first.", vi: "Chưa đăng nhập tài khoản chính thức. Đăng nhập chính thức kèm API Key cần đăng nhập trước." },
  { zh: "当前还没有填写混入 API 的 Base URL / Key。", en: "Mixed API Base URL / Key has not been filled in yet.", vi: "Chưa nhập Base URL / Key cho API dùng kèm." },
  { zh: "当前未登录官方账号；切到官方登录模式后仍需要先在 Codex/ChatGPT 登录。", en: "No official account is signed in. After switching to official login mode, sign in in Codex/ChatGPT first.", vi: "Chưa đăng nhập tài khoản chính thức. Sau khi chuyển sang đăng nhập chính thức, vẫn cần đăng nhập trong Codex/ChatGPT trước." },
  { zh: "当前供应商还没有完整 config.toml / API Key 存档。", en: "The current provider does not have a complete config.toml / API key archive yet.", vi: "Provider hiện tại chưa có bản lưu config.toml / API Key đầy đủ." },
  { zh: "纯 API 配置未完整写入：请检查此供应商是否有 OPENAI_API_KEY，且 config.toml 是否包含 model_provider / provider / base_url。", en: "Pure API config was not fully written. Check whether this provider has OPENAI_API_KEY and whether config.toml includes model_provider / provider / base_url.", vi: "Cấu hình pure API chưa được ghi đầy đủ. Hãy kiểm tra provider có OPENAI_API_KEY và config.toml có model_provider / provider / base_url hay chưa." },
  { zh: "纯 API 就绪：会同时写入 config.toml 和 auth.json。", en: "Pure API ready: config.toml and auth.json will both be written.", vi: "Pure API sẵn sàng: sẽ ghi cả config.toml và auth.json." },
  { zh: "适合官方登录或官方混入 API Key；保留会话删除、导出、项目移动、Timeline 和用户脚本，关闭插件入口相关增强。", en: "For official login or official login mixed with an API key. Keeps session delete, export, project move, timeline, and user scripts while disabling plugin-entry enhancements.", vi: "Phù hợp đăng nhập chính thức hoặc chính thức kèm API Key. Giữ xóa phiên, xuất, chuyển dự án, timeline và script người dùng, tắt tăng cường liên quan lối vào plugin." },
  { zh: "适合纯 API；启用插件入口、强制安装、会话删除导出、项目移动等全部页面能力。", en: "For pure API. Enables plugin entry, force install, session delete/export, project move, and all page features.", vi: "Phù hợp pure API. Bật lối vào plugin, buộc cài, xóa/xuất phiên, chuyển dự án và toàn bộ tính năng trang." },

  { zh: "关于 Codex++", en: "About Codex++", vi: "Giới thiệu Codex++" },
  { zh: "Codex++ 版本", en: "Codex++ Version", vi: "Phiên bản Codex++" },
  { zh: "本地 Codex 增强、管理工具和安装包维护", en: "Local Codex enhancements, manager, and installer maintenance", vi: "Tăng cường Codex cục bộ, trình quản lý và bảo trì bộ cài" },
  { zh: "项目地址", en: "Project URL", vi: "Địa chỉ dự án" },
  { zh: "打开项目主页", en: "Open Project Home", vi: "Mở trang dự án" },
  { zh: "反馈问题", en: "Report Issue", vi: "Báo lỗi" },
  { zh: "打开关于", en: "Open About", vi: "Mở giới thiệu" },
  { zh: "Debug 端口", en: "Debug Port", vi: "Cổng debug" },
  { zh: "Helper 端口", en: "Helper Port", vi: "Cổng helper" },
  { zh: "保存为默认路径", en: "Save as Default Path", vi: "Lưu làm đường dẫn mặc định" },
  { zh: "例如 C:\\Program Files\\WindowsApps\\OpenAI.Codex...\\app", en: "For example C:\\Program Files\\WindowsApps\\OpenAI.Codex...\\app", vi: "Ví dụ C:\\Program Files\\WindowsApps\\OpenAI.Codex...\\app" },
  { zh: "未检测到", en: "Not detected", vi: "Chưa phát hiện" },
  { zh: "未知版本", en: "Unknown version", vi: "Không rõ phiên bản" },
  { zh: "深色", en: "dark", vi: "tối" },
  { zh: "浅色", en: "light", vi: "sáng" },
  { zh: "尚未检查 Codex 应用路径。", en: "Codex app path has not been checked yet.", vi: "Chưa kiểm tra đường dẫn ứng dụng Codex." },
  { zh: "缺少 Codex++ 静默启动快捷方式时可在安装维护页修复。", en: "If the Codex++ silent launch shortcut is missing, repair it on the Maintenance page.", vi: "Nếu thiếu shortcut khởi chạy ẩn Codex++, có thể sửa ở trang Bảo trì." },
  { zh: "缺少管理工具快捷方式时可在安装维护页修复。", en: "If the manager shortcut is missing, repair it on the Maintenance page.", vi: "Nếu thiếu shortcut trình quản lý, có thể sửa ở trang Bảo trì." },
  { zh: "重新生成", en: "Regenerate", vi: "Tạo lại" },
  { zh: "暂无日志。", en: "No logs yet.", vi: "Chưa có log." },
  { zh: "尚未生成诊断报告。", en: "No diagnostics report has been generated yet.", vi: "Chưa tạo báo cáo chẩn đoán." },

  { zh: "后端版本已读取。", en: "Backend version loaded.", vi: "Đã đọc phiên bản backend." },
  { zh: "启动参数已读取。", en: "Launch arguments loaded.", vi: "Đã đọc tham số khởi chạy." },
  { zh: "概览后台任务失败。", en: "Overview background task failed.", vi: "Tác vụ nền tổng quan thất bại." },
  { zh: "概览已加载。", en: "Overview loaded.", vi: "Đã tải tổng quan." },
  { zh: "启动任务已在后台开始，可稍后查看概览状态。", en: "Launch task started in the background. Check the overview status later.", vi: "Tác vụ khởi chạy đã bắt đầu trong nền. Có thể xem trạng thái ở tổng quan sau." },
  { zh: "Codex 已请求重启，启动任务正在后台运行。", en: "Codex restart requested. The launch task is running in the background.", vi: "Đã yêu cầu khởi động lại Codex. Tác vụ khởi chạy đang chạy trong nền." },
  { zh: "设置已加载。", en: "Settings loaded.", vi: "Đã tải cài đặt." },
  { zh: "设置读取失败", en: "Failed to read settings", vi: "Không đọc được cài đặt" },
  { zh: "设置已保存。", en: "Settings saved.", vi: "Đã lưu cài đặt." },
  { zh: "设置保存后重新读取失败", en: "Failed to reload settings after saving", vi: "Không đọc lại được cài đặt sau khi lưu" },
  { zh: "没有可联动的 cc-switch Codex 供应商配置。", en: "No cc-switch Codex provider config is available to link.", vi: "Không có cấu hình provider Codex từ cc-switch để liên kết." },
  { zh: "会话 ID 不能为空。", en: "Session ID cannot be empty.", vi: "ID phiên không được để trống." },
  { zh: "Provider 同步目标已加载。", en: "Provider sync targets loaded.", vi: "Đã tải mục tiêu đồng bộ provider." },
  { zh: "推荐内容已加载。", en: "Recommendations loaded.", vi: "Đã tải đề xuất." },
  { zh: "脚本市场已刷新。", en: "Script market refreshed.", vi: "Đã làm mới chợ script." },
  { zh: "脚本 id 不能为空。", en: "Script id cannot be empty.", vi: "ID script không được để trống." },
  { zh: "市场清单中未找到该脚本。", en: "This script was not found in the market manifest.", vi: "Không tìm thấy script này trong manifest chợ." },
  { zh: "脚本已安装。", en: "Script installed.", vi: "Đã cài script." },
  { zh: "脚本 key 不能为空。", en: "Script key cannot be empty.", vi: "Key script không được để trống." },
  { zh: "脚本已启用。", en: "Script enabled.", vi: "Đã bật script." },
  { zh: "脚本已禁用。", en: "Script disabled.", vi: "Đã tắt script." },
  { zh: "脚本启停失败", en: "Failed to toggle script", vi: "Bật/tắt script thất bại" },
  { zh: "脚本已删除。", en: "Script deleted.", vi: "Đã xóa script." },
  { zh: "脚本删除失败", en: "Failed to delete script", vi: "Xóa script thất bại" },
  { zh: "只允许打开 http 或 https 链接。", en: "Only http or https links can be opened.", vi: "Chỉ được mở liên kết http hoặc https." },
  { zh: "已在系统浏览器打开链接。", en: "Link opened in the system browser.", vi: "Đã mở liên kết trong trình duyệt hệ thống." },
  { zh: "入口已安装。", en: "Entrypoints installed.", vi: "Đã cài lối vào." },
  { zh: "入口已卸载。", en: "Entrypoints uninstalled.", vi: "Đã gỡ lối vào." },
  { zh: "入口已修复。", en: "Entrypoints repaired.", vi: "Đã sửa lối vào." },
  { zh: "后端已修复，命令包装器当前未启用。", en: "Backend repaired. The command wrapper is currently disabled.", vi: "Đã sửa backend. Wrapper lệnh hiện chưa bật." },
  { zh: "发现可用更新。", en: "Update available.", vi: "Có bản cập nhật." },
  { zh: "当前已是最新版本。", en: "Already on the latest version.", vi: "Đang ở phiên bản mới nhất." },
  { zh: "请先检查更新并选择可下载的 Release asset。", en: "Check for updates first and choose a downloadable release asset.", vi: "Hãy kiểm tra cập nhật trước và chọn asset phát hành có thể tải." },
  { zh: "安装包已下载并启动，请按安装向导完成更新。", en: "Installer downloaded and launched. Follow the installer to complete the update.", vi: "Bộ cài đã tải và chạy. Hãy làm theo trình cài đặt để hoàn tất cập nhật." },
  { zh: "watcher 状态已加载。", en: "Watcher status loaded.", vi: "Đã tải trạng thái watcher." },
  { zh: "watcher 已安装。", en: "Watcher installed.", vi: "Đã cài watcher." },
  { zh: "watcher 已移除。", en: "Watcher removed.", vi: "Đã gỡ watcher." },
  { zh: "watcher 已启用。", en: "Watcher enabled.", vi: "Đã bật watcher." },
  { zh: "watcher 已禁用。", en: "Watcher disabled.", vi: "Đã tắt watcher." },
  { zh: "日志已读取。", en: "Logs read.", vi: "Đã đọc log." },
  { zh: "诊断报告已生成。", en: "Diagnostics report generated.", vi: "Đã tạo báo cáo chẩn đoán." },
  { zh: "设置已重置为默认值。", en: "Settings reset to defaults.", vi: "Đã đặt lại cài đặt mặc định." },
  { zh: "已检测到 ChatGPT 登录状态。", en: "ChatGPT login detected.", vi: "Đã phát hiện trạng thái đăng nhập ChatGPT." },
  { zh: "未检测到 ChatGPT 登录状态，请先在 Codex/ChatGPT 中正常登录。", en: "ChatGPT login was not detected. Sign in normally in Codex/ChatGPT first.", vi: "Chưa phát hiện trạng thái đăng nhập ChatGPT. Hãy đăng nhập bình thường trong Codex/ChatGPT trước." },
  { zh: "配置文件内容已读取。", en: "Config file contents read.", vi: "Đã đọc nội dung file cấu hình." },
  { zh: "配置文件已保存。", en: "Config file saved.", vi: "Đã lưu file cấu hình." },
  { zh: "诊断日志已写入。", en: "Diagnostics log written.", vi: "Đã ghi log chẩn đoán." },
  { zh: "当前供应商已不在配置列表中，已停止切换以避免覆盖用户改动。", en: "The current provider is no longer in the config list. Switching stopped to avoid overwriting user changes.", vi: "Provider hiện tại không còn trong danh sách cấu hình. Đã dừng chuyển để tránh ghi đè thay đổi của người dùng." },
  { zh: "当前供应商配置已从 live 文件回填。", en: "Current provider config backfilled from live files.", vi: "Đã điền lại cấu hình provider hiện tại từ file live." },
  { zh: "工具与插件列表已读取。", en: "Tools and plugins list read.", vi: "Đã đọc danh sách công cụ và plugin." },
  { zh: "live 工具与插件已读取。", en: "Live tools and plugins read.", vi: "Đã đọc công cụ và plugin live." },
  { zh: "live 工具与插件已同步。", en: "Live tools and plugins synced.", vi: "Đã đồng bộ công cụ và plugin live." },
  { zh: "通用配置已按兼容切换规则提取。", en: "Common config extracted using compatible switching rules.", vi: "Đã trích xuất cấu hình chung theo quy tắc chuyển tương thích." },
  { zh: "响应内容为空", en: "Response content is empty", vi: "Nội dung phản hồi trống" },
  { zh: "供应商配置总开关已关闭，未写入 config.toml / auth.json。", en: "Provider config master switch is off. config.toml/auth.json were not written.", vi: "Công tắc cấu hình provider đang tắt. Chưa ghi config.toml/auth.json." },
  { zh: "已按兼容切换规则切换供应商。", en: "Provider switched using compatible switching rules.", vi: "Đã chuyển provider theo quy tắc chuyển tương thích." },
  { zh: "未检测到 ChatGPT 登录状态", en: "ChatGPT login not detected", vi: "Chưa phát hiện đăng nhập ChatGPT" },
  { zh: "未检测到 ChatGPT 登录状态，已停止写入中转配置。", en: "ChatGPT login was not detected. Relay config writing stopped.", vi: "Chưa phát hiện đăng nhập ChatGPT. Đã dừng ghi cấu hình relay." },
  { zh: "中转配置已写入，密钥未在界面明文显示。", en: "Relay config written. The key is not shown in plain text in the UI.", vi: "Đã ghi cấu hình relay. Key không hiển thị dạng rõ trong giao diện." },
  { zh: "已切回官方登录；页面增强已设为兼容增强。", en: "Switched back to official login. Page enhancements are set to compatible mode.", vi: "Đã chuyển về đăng nhập chính thức. Tăng cường trang đã đặt sang chế độ tương thích." },
  { zh: "已切换到纯 API；页面增强已设为完整增强。", en: "Switched to pure API. Page enhancements are set to full mode.", vi: "Đã chuyển sang pure API. Tăng cường trang đã đặt sang chế độ đầy đủ." },
  { zh: "已按此供应商切换到纯 API；页面增强已设为完整增强。", en: "Switched to pure API for this provider. Page enhancements are set to full mode.", vi: "Đã chuyển sang pure API theo provider này. Tăng cường trang đã đặt sang chế độ đầy đủ." },
  { zh: "已按此供应商使用官方登录，并混入 API Key；页面增强已设为兼容增强。", en: "Using official login for this provider with the API key mixed in. Page enhancements are set to compatible mode.", vi: "Đã dùng đăng nhập chính thức theo provider này kèm API Key. Tăng cường trang đã đặt sang chế độ tương thích." },
  { zh: "已按此供应商切回官方登录；页面增强已设为兼容增强。", en: "Switched back to official login for this provider. Page enhancements are set to compatible mode.", vi: "Đã chuyển về đăng nhập chính thức theo provider này. Tăng cường trang đã đặt sang chế độ tương thích." },
  { zh: "纯 API 配置写入后未检测到完整 custom provider，请检查 config.toml 和供应商 API Key。", en: "A complete custom provider was not detected after writing pure API config. Check config.toml and the provider API key.", vi: "Chưa phát hiện custom provider đầy đủ sau khi ghi cấu hình pure API. Hãy kiểm tra config.toml và API Key provider." },
  { zh: "纯 API 模式已写入：config.toml 已写入 custom provider，auth.json 已切换为当前供应商。", en: "Pure API mode written: config.toml now contains the custom provider, and auth.json was switched to the current provider.", vi: "Đã ghi chế độ pure API: config.toml đã có custom provider và auth.json đã chuyển sang provider hiện tại." },
  { zh: "已清除 custom 中转 API 模式，并切换到官方 ChatGPT 登录模式。", en: "Custom relay API mode cleared and switched to official ChatGPT login mode.", vi: "Đã xóa chế độ custom relay API và chuyển sang đăng nhập ChatGPT chính thức." },
  { zh: "Base URL 不能为空", en: "Base URL cannot be empty", vi: "Base URL không được để trống" },
  { zh: "API Key 不能为空", en: "API Key cannot be empty", vi: "API Key không được để trống" },
  { zh: "测试模型不能为空", en: "Test model cannot be empty", vi: "Model kiểm thử không được để trống" },
  { zh: "中转 Base URL 不能为空", en: "Relay Base URL cannot be empty", vi: "Base URL relay không được để trống" },
  { zh: "中转 Key 不能为空", en: "Relay key cannot be empty", vi: "Key relay không được để trống" },
  { zh: "config.toml 内容不能为空", en: "config.toml content cannot be empty", vi: "Nội dung config.toml không được để trống" },
  { zh: "后端已连接", en: "Backend connected", vi: "Backend đã kết nối" },
  { zh: "日志已记录", en: "Log recorded", vi: "Đã ghi log" },
  { zh: "未知后端路径", en: "Unknown backend path", vi: "Không rõ đường dẫn backend" },
  { zh: "上游没有返回可用模型", en: "The upstream did not return any available models", vi: "Upstream không trả về model khả dụng" },
  { zh: "未配置本地 Codex 数据库", en: "Local Codex database is not configured", vi: "Chưa cấu hình cơ sở dữ liệu Codex cục bộ" },
  { zh: "不支持当前本地存储结构", en: "The current local storage structure is not supported", vi: "Cấu trúc lưu trữ cục bộ hiện tại chưa được hỗ trợ" },
  { zh: "未找到对应会话", en: "Matching session was not found", vi: "Không tìm thấy phiên tương ứng" },
  { zh: "会话缺少 rollout 文件路径", en: "The session is missing its rollout file path", vi: "Phiên thiếu đường dẫn file rollout" },
  { zh: "未找到可导出的用户或助手消息", en: "No exportable user or assistant messages were found", vi: "Không tìm thấy tin nhắn người dùng hoặc trợ lý để xuất" },
  { zh: "未找到系统 Codex CLI，可先启动一次系统 Codex 或重新安装 Codex", en: "System Codex CLI was not found. Launch system Codex once or reinstall Codex.", vi: "Không tìm thấy Codex CLI hệ thống. Hãy mở Codex hệ thống một lần hoặc cài lại Codex." },
  { zh: "目标项目路径为空", en: "Target project path is empty", vi: "Đường dẫn dự án đích đang trống" },
  { zh: "已移动对话", en: "Conversation moved", vi: "Đã chuyển hội thoại" },
  { zh: "已从本地存储删除", en: "Deleted from local storage", vi: "Đã xóa khỏi lưu trữ cục bộ" },
  { zh: "当前中转未启用 Chat Completions 协议代理", en: "The current relay has not enabled the Chat Completions protocol proxy", vi: "Relay hiện tại chưa bật proxy giao thức Chat Completions" },
  { zh: "Chat Completions 上游 Base URL 不能为空", en: "Chat Completions upstream Base URL cannot be empty", vi: "Base URL upstream Chat Completions không được để trống" },
  { zh: "Chat Completions 上游 Key 不能为空", en: "Chat Completions upstream key cannot be empty", vi: "Key upstream Chat Completions không được để trống" },
  { zh: "已通过 auth.json 和 config.toml 检测到 ChatGPT 登录。", en: "ChatGPT login was detected through auth.json and config.toml.", vi: "Đã phát hiện đăng nhập ChatGPT qua auth.json và config.toml." },
  { zh: "未检测到 ChatGPT 登录账号。", en: "No ChatGPT login account was detected.", vi: "Chưa phát hiện tài khoản ChatGPT đã đăng nhập." },
  { zh: "上下文 id 不能为空", en: "Context id cannot be empty", vi: "ID context không được để trống" },
  { zh: "写入 auth.json 失败", en: "Failed to write auth.json", vi: "Không ghi được auth.json" },
  { zh: "写入 config.toml 失败", en: "Failed to write config.toml", vi: "Không ghi được config.toml" },
  { zh: "config.toml TOML 解析失败", en: "Failed to parse config.toml as TOML", vi: "Không parse được config.toml dạng TOML" },
  { zh: "auth.json JSON 解析失败", en: "Failed to parse auth.json as JSON", vi: "Không parse được auth.json dạng JSON" },
  { zh: "auth.json 必须是 JSON 对象", en: "auth.json must be a JSON object", vi: "auth.json phải là JSON object" },
  { zh: "没有可下载的 Release asset", en: "No downloadable release asset is available", vi: "Không có release asset nào có thể tải" },
  { zh: "当前平台不支持启动安装包", en: "The current platform does not support launching the installer", vi: "Nền tảng hiện tại không hỗ trợ chạy bộ cài" },
  { zh: "无法定位 Windows 启动目录", en: "Could not locate the Windows startup folder", vi: "Không xác định được thư mục Startup của Windows" },
  { zh: "Codex 已启动，Codex++ 增强仍在等待页面就绪。", en: "Codex has launched, and Codex++ enhancements are still waiting for the page to be ready.", vi: "Codex đã khởi chạy, Codex++ vẫn đang chờ trang sẵn sàng để bật tăng cường." },
  { zh: "HTTP 请求过大", en: "HTTP request is too large", vi: "HTTP request quá lớn" },
  { zh: "当前平台暂不支持安装 Codex++ 入口", en: "Installing Codex++ entrypoints is not supported on the current platform", vi: "Nền tảng hiện tại chưa hỗ trợ cài lối vào Codex++" },
  { zh: "当前平台暂不支持卸载 Codex++ 入口", en: "Uninstalling Codex++ entrypoints is not supported on the current platform", vi: "Nền tảng hiện tại chưa hỗ trợ gỡ lối vào Codex++" },

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

const dynamicPrefixTranslations: Record<AppLanguage, Record<string, string>> = {
  en: {
    "打开选择器失败": "Failed to open picker",
    "启动静默入口失败": "Failed to start silent entrypoint",
    "无法启动": "Failed to launch",
    "写回 cc-switch 供应商配置失败": "Failed to write cc-switch provider config",
    "同步 cc-switch 当前供应商失败": "Failed to sync current cc-switch provider",
    "保存设置失败": "Failed to save settings",
    "读取外部供应商配置失败": "Failed to read external provider config",
    "保存外部供应商配置失败": "Failed to save external provider config",
    "读取本地会话失败": "Failed to read local sessions",
    "Provider 同步目标加载失败": "Failed to load provider sync targets",
    "供应商同步失败": "Provider sync failed",
    "推荐内容加载失败": "Failed to load recommendations",
    "脚本市场加载失败": "Failed to load script market",
    "安装脚本失败": "Failed to install script",
    "脚本启停失败": "Failed to toggle script",
    "脚本删除失败": "Failed to delete script",
    "打开链接失败": "Failed to open link",
    "安装 watcher 失败": "Failed to install watcher",
    "移除 watcher 失败": "Failed to remove watcher",
    "启用 watcher 失败": "Failed to enable watcher",
    "禁用 watcher 失败": "Failed to disable watcher",
    "读取日志失败": "Failed to read logs",
    "重置设置失败": "Failed to reset settings",
    "读取配置文件失败": "Failed to read config files",
    "保存配置文件失败": "Failed to save config files",
    "写入诊断日志失败": "Failed to write diagnostics log",
    "回填当前供应商配置失败": "Failed to backfill current provider config",
    "读取工具与插件列表失败": "Failed to read tools and plugins list",
    "读取 live 工具与插件失败": "Failed to read live tools and plugins",
    "保存工具与插件失败": "Failed to save tools and plugins",
    "读取 live config.toml 失败": "Failed to read live config.toml",
    "同步 live 工具与插件失败": "Failed to sync live tools and plugins",
    "创建 Codex 配置目录失败": "Failed to create Codex config directory",
    "写入 live config.toml 失败": "Failed to write live config.toml",
    "读取同步后的 live 工具与插件失败": "Failed to read synced live tools and plugins",
    "删除工具与插件失败": "Failed to delete tools and plugins",
    "提取通用配置失败": "Failed to extract common config",
    "测试": "Test failed for",
    "从": "Fetch failed from",
    "切换完整中转配置失败": "Failed to switch full relay config",
    "写入中转配置失败": "Failed to write relay config",
    "切换纯 API 配置失败": "Failed to switch pure API config",
    "写入纯 API 模式失败": "Failed to write pure API mode",
    "清除中转配置失败": "Failed to clear relay config",
    "启动系统浏览器失败": "Failed to launch system browser",
    "诊断报告序列化失败": "Failed to serialize diagnostics report",
    "数据库不存在": "Database does not exist",
    "rollout 文件不存在": "Rollout file does not exist",
    "已导出为 Markdown": "Exported as Markdown",
    "读取 rollout 失败": "Failed to read rollout",
    "本地数据库已删除，但文件删除失败": "Local database was deleted, but file deletion failed",
    "未找到管理工具": "Manager was not found",
    "启动管理工具失败": "Failed to start manager",
    "初始化 COM 失败": "Failed to initialize COM",
    "创建 ShellLink COM 对象失败": "Failed to create ShellLink COM object",
    "设置快捷方式目标失败": "Failed to set shortcut target",
    "设置快捷方式参数失败": "Failed to set shortcut arguments",
    "设置快捷方式工作目录失败": "Failed to set shortcut working directory",
    "设置快捷方式描述失败": "Failed to set shortcut description",
    "设置快捷方式图标失败": "Failed to set shortcut icon",
    "设置快捷方式窗口模式失败": "Failed to set shortcut window mode",
    "获取 IPersistFile 失败": "Failed to get IPersistFile",
    "保存快捷方式失败": "Failed to save shortcut",
    "未知上下文类型": "Unknown context type",
    "启动安装包失败": "Failed to launch installer",
    "打开 DMG 失败": "Failed to open DMG",
    "响应": "Response",
  },
  vi: {
    "打开选择器失败": "Không mở được trình chọn",
    "启动静默入口失败": "Không khởi chạy được lối vào chạy ẩn",
    "无法启动": "Không khởi chạy được",
    "写回 cc-switch 供应商配置失败": "Không ghi lại được cấu hình provider cc-switch",
    "同步 cc-switch 当前供应商失败": "Không đồng bộ được provider cc-switch hiện tại",
    "保存设置失败": "Không lưu được cài đặt",
    "读取外部供应商配置失败": "Không đọc được cấu hình provider bên ngoài",
    "保存外部供应商配置失败": "Không lưu được cấu hình provider bên ngoài",
    "读取本地会话失败": "Không đọc được phiên cục bộ",
    "Provider 同步目标加载失败": "Không tải được mục tiêu đồng bộ provider",
    "供应商同步失败": "Đồng bộ provider thất bại",
    "推荐内容加载失败": "Không tải được đề xuất",
    "脚本市场加载失败": "Không tải được chợ script",
    "安装脚本失败": "Không cài được script",
    "脚本启停失败": "Bật/tắt script thất bại",
    "脚本删除失败": "Xóa script thất bại",
    "打开链接失败": "Không mở được liên kết",
    "安装 watcher 失败": "Không cài được watcher",
    "移除 watcher 失败": "Không gỡ được watcher",
    "启用 watcher 失败": "Không bật được watcher",
    "禁用 watcher 失败": "Không tắt được watcher",
    "读取日志失败": "Không đọc được log",
    "重置设置失败": "Không đặt lại được cài đặt",
    "读取配置文件失败": "Không đọc được file cấu hình",
    "保存配置文件失败": "Không lưu được file cấu hình",
    "写入诊断日志失败": "Không ghi được log chẩn đoán",
    "回填当前供应商配置失败": "Không điền lại được cấu hình provider hiện tại",
    "读取工具与插件列表失败": "Không đọc được danh sách công cụ và plugin",
    "读取 live 工具与插件失败": "Không đọc được công cụ và plugin live",
    "保存工具与插件失败": "Không lưu được công cụ và plugin",
    "读取 live config.toml 失败": "Không đọc được live config.toml",
    "同步 live 工具与插件失败": "Không đồng bộ được công cụ và plugin live",
    "创建 Codex 配置目录失败": "Không tạo được thư mục cấu hình Codex",
    "写入 live config.toml 失败": "Không ghi được live config.toml",
    "读取同步后的 live 工具与插件失败": "Không đọc được công cụ và plugin live sau khi đồng bộ",
    "删除工具与插件失败": "Không xóa được công cụ và plugin",
    "提取通用配置失败": "Không trích xuất được cấu hình chung",
    "测试": "Kiểm thử thất bại cho",
    "从": "Không lấy được từ",
    "切换完整中转配置失败": "Không chuyển được cấu hình relay đầy đủ",
    "写入中转配置失败": "Không ghi được cấu hình relay",
    "切换纯 API 配置失败": "Không chuyển được cấu hình pure API",
    "写入纯 API 模式失败": "Không ghi được chế độ pure API",
    "清除中转配置失败": "Không xóa được cấu hình relay",
    "启动系统浏览器失败": "Không khởi chạy được trình duyệt hệ thống",
    "诊断报告序列化失败": "Không serialize được báo cáo chẩn đoán",
    "数据库不存在": "Cơ sở dữ liệu không tồn tại",
    "rollout 文件不存在": "File rollout không tồn tại",
    "已导出为 Markdown": "Đã xuất thành Markdown",
    "读取 rollout 失败": "Không đọc được rollout",
    "本地数据库已删除，但文件删除失败": "Đã xóa cơ sở dữ liệu cục bộ, nhưng xóa file thất bại",
    "未找到管理工具": "Không tìm thấy trình quản lý",
    "启动管理工具失败": "Không khởi chạy được trình quản lý",
    "初始化 COM 失败": "Không khởi tạo được COM",
    "创建 ShellLink COM 对象失败": "Không tạo được đối tượng COM ShellLink",
    "设置快捷方式目标失败": "Không đặt được đích shortcut",
    "设置快捷方式参数失败": "Không đặt được tham số shortcut",
    "设置快捷方式工作目录失败": "Không đặt được thư mục làm việc của shortcut",
    "设置快捷方式描述失败": "Không đặt được mô tả shortcut",
    "设置快捷方式图标失败": "Không đặt được biểu tượng shortcut",
    "设置快捷方式窗口模式失败": "Không đặt được chế độ cửa sổ shortcut",
    "获取 IPersistFile 失败": "Không lấy được IPersistFile",
    "保存快捷方式失败": "Không lưu được shortcut",
    "未知上下文类型": "Loại context không rõ",
    "启动安装包失败": "Không khởi chạy được bộ cài",
    "打开 DMG 失败": "Không mở được DMG",
    "响应": "Phản hồi",
  },
};

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
  translateWholeTextElements(language, root);
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

  const count = /^(.+)\s+(?:条|个|items|mục)$/.exec(text);
  if (count && /^\d+$/.test(count[1])) return language === "vi" ? `${count[1]} mục` : `${count[1]} items`;

  const marketSource = /^(?:市场|Market|Chợ)\s+·\s+(.+)$/.exec(text);
  if (marketSource) return language === "vi" ? `Chợ · ${marketSource[1]}` : `Market · ${marketSource[1]}`;

  const scriptDeleteConfirm = /^删除脚本[“"](.+)[”"]？此操作会移除本地脚本文件。$/.exec(text);
  if (scriptDeleteConfirm) return language === "vi" ? `Xóa script “${scriptDeleteConfirm[1]}”? Thao tác này sẽ xóa file script cục bộ.` : `Delete script “${scriptDeleteConfirm[1]}”? This will remove the local script file.`;

  const sessionDeleteConfirm = /^删除会话[“"](.+)[”"]？此操作会删除本地数据库记录和 rollout 文件，并创建备份。$/.exec(text);
  if (sessionDeleteConfirm) return language === "vi" ? `Xóa phiên “${sessionDeleteConfirm[1]}”? Thao tác này sẽ xóa bản ghi cơ sở dữ liệu cục bộ và file rollout, đồng thời tạo bản sao lưu.` : `Delete session “${sessionDeleteConfirm[1]}”? This will delete the local database record and rollout file, then create a backup.`;

  const providerSyncMessage = /^已同步到\s+(.+)：修复\s+(\d+)\s+个会话文件，更新\s+(\d+)\s+行索引(?:，跳过\s+(\d+)\s+个占用文件)?。$/.exec(text);
  if (providerSyncMessage) {
    const [, target, changed, rows, skipped] = providerSyncMessage;
    const translatedTarget = translateText(language, target);
    if (language === "vi") return `Đã đồng bộ tới ${translatedTarget}: sửa ${changed} file phiên, cập nhật ${rows} dòng chỉ mục${skipped ? `, bỏ qua ${skipped} file đang bị chiếm dụng` : ""}.`;
    return `Synced to ${translatedTarget}: repaired ${changed} session files, updated ${rows} index rows${skipped ? `, skipped ${skipped} locked files` : ""}.`;
  }

  const syncingProvider = /^正在同步到\s+(.+)…$/.exec(text);
  if (syncingProvider) return language === "vi" ? `Đang đồng bộ tới ${syncingProvider[1]}...` : `Syncing to ${syncingProvider[1]}...`;

  const providerListSummary = /^(\d+)\s+个供应商配置；可拖动排序，点编辑进入详情$/.exec(text);
  if (providerListSummary) return language === "vi" ? `${providerListSummary[1]} cấu hình provider. Kéo để sắp xếp, bấm sửa để xem chi tiết.` : `${providerListSummary[1]} provider configs. Drag to sort; click edit for details.`;

  const scriptMarketSummary = /^(\d+)\s+个市场脚本，已安装\s+(\d+)\s+个，本地整体\s+(.+)$/.exec(text);
  if (scriptMarketSummary) return language === "vi" ? `${scriptMarketSummary[1]} script trên chợ, đã cài ${scriptMarketSummary[2]}, tổng thể cục bộ ${translateText(language, scriptMarketSummary[3])}.` : `${scriptMarketSummary[1]} market scripts, ${scriptMarketSummary[2]} installed, local overall ${translateText(language, scriptMarketSummary[3])}.`;

  const loadedRecommendations = /^已加载\s+(\d+)\s+条推荐$/.exec(text);
  if (loadedRecommendations) return language === "vi" ? `Đã tải ${loadedRecommendations[1]} đề xuất` : `Loaded ${loadedRecommendations[1]} recommendations`;

  const manifestUpdatedAt = /^清单更新时间：(.+)$/.exec(text);
  if (manifestUpdatedAt) return language === "vi" ? `Thời gian cập nhật manifest: ${manifestUpdatedAt[1]}` : `Manifest updated at: ${manifestUpdatedAt[1]}`;

  const installedVersion = /^已安装\s+(.+)$/.exec(text);
  if (installedVersion) return language === "vi" ? `Đã cài ${installedVersion[1]}` : `Installed ${installedVersion[1]}`;

  const defaultPlaceholder = /^留空使用默认：(.+)$/.exec(text);
  if (defaultPlaceholder) return language === "vi" ? `Để trống để dùng mặc định: ${defaultPlaceholder[1]}` : `Leave empty to use default: ${defaultPlaceholder[1]}`;

  const noRewritePlaceholder = /^留空不改写，例如\s+(.+)$/.exec(text);
  if (noRewritePlaceholder) return language === "vi" ? `Để trống để không ghi đè, ví dụ ${noRewritePlaceholder[1]}` : `Leave empty to avoid overwriting, for example ${noRewritePlaceholder[1]}`;

  const ccsLinked = /^此供应商联动自 cc-switch：(.+)。开启“保存时回写 cc-switch”后，本页保存会同步修改 cc-switch 数据库中的同一供应商。$/.exec(text);
  if (ccsLinked) return language === "vi" ? `Provider này được liên kết từ cc-switch: ${ccsLinked[1]}. Khi bật “ghi lại cc-switch khi lưu”, việc lưu trang này sẽ đồng bộ provider tương ứng trong cơ sở dữ liệu cc-switch.` : `This provider is linked from cc-switch: ${ccsLinked[1]}. When “write back to cc-switch on save” is enabled, saving this page also updates the matching provider in the cc-switch database.`;

  const missingProviderConfig = /^供应商「(.+)」缺少独立 config\.toml，已停止切换，避免继续显示上一套配置文件。请先在该供应商详情里保存 config\.toml。$/.exec(text);
  if (missingProviderConfig) return language === "vi" ? `Provider “${missingProviderConfig[1]}” thiếu config.toml riêng. Đã dừng chuyển để tránh tiếp tục hiển thị bộ cấu hình trước đó. Hãy lưu config.toml trong chi tiết provider này trước.` : `Provider “${missingProviderConfig[1]}” is missing its own config.toml. Switching stopped to avoid continuing to show the previous config set. Save config.toml in this provider's details first.`;

  const officialReady = /^官方登录已就绪：(.+)，会混入当前 API Key。$/.exec(text);
  if (officialReady) return language === "vi" ? `Đăng nhập chính thức đã sẵn sàng: ${officialReady[1]}, sẽ dùng kèm API Key hiện tại.` : `Official login is ready: ${officialReady[1]}, and the current API key will be mixed in.`;

  const officialAccount = /^官方账号已登录：(.+)。$/.exec(text);
  if (officialAccount) return language === "vi" ? `Tài khoản chính thức đã đăng nhập: ${officialAccount[1]}.` : `Official account signed in: ${officialAccount[1]}.`;

  const externalProviders = /^已读取外部 Codex 供应商配置：(.+) 个。$/.exec(text);
  if (externalProviders) return language === "vi" ? `Đã đọc ${externalProviders[1]} cấu hình provider Codex bên ngoài.` : `Read ${externalProviders[1]} external Codex provider configs.`;

  const ccsEnabled = /^已开启 cc-switch 联动：(.+) 个供应商将直接从 cc-switch 读取。$/.exec(text);
  if (ccsEnabled) return language === "vi" ? `Đã bật liên kết cc-switch: ${ccsEnabled[1]} provider sẽ được đọc trực tiếp từ cc-switch.` : `cc-switch link enabled: ${ccsEnabled[1]} providers will be read directly from cc-switch.`;

  const localSessions = /^已读取\s+(.+)\s+个本地会话。$/.exec(text);
  if (localSessions) return language === "vi" ? `Đã đọc ${localSessions[1]} phiên cục bộ.` : `Read ${localSessions[1]} local sessions.`;

  const providerSyncOnce = /^供应商已同步一次：(.+) 个会话文件，(.+) 行索引，跳过 (.+) 个占用文件。$/.exec(text);
  if (providerSyncOnce) return language === "vi" ? `Provider đã đồng bộ một lần: ${providerSyncOnce[1]} file phiên, ${providerSyncOnce[2]} dòng chỉ mục, bỏ qua ${providerSyncOnce[3]} file đang bị chiếm dụng.` : `Provider synced once: ${providerSyncOnce[1]} session files, ${providerSyncOnce[2]} index rows, skipped ${providerSyncOnce[3]} locked files.`;

  const tomlTableRequired = /^(.+)\s+必须是 TOML (?:table|表)$/.exec(text);
  if (tomlTableRequired) return language === "vi" ? `${tomlTableRequired[1]} phải là TOML table` : `${tomlTableRequired[1]} must be a TOML table`;

  const positiveInteger = /^(.+)必须是正整数$/.exec(text);
  if (positiveInteger) return language === "vi" ? `${translateText(language, positiveInteger[1])} phải là số nguyên dương` : `${translateText(language, positiveInteger[1])} must be a positive integer`;

  const greaterThanZero = /^(.+)必须大于 0$/.exec(text);
  if (greaterThanZero) return language === "vi" ? `${translateText(language, greaterThanZero[1])} phải lớn hơn 0` : `${translateText(language, greaterThanZero[1])} must be greater than 0`;

  const invalidToml = /^(.+) 不是有效 TOML$/.exec(text);
  if (invalidToml) return language === "vi" ? `${invalidToml[1]} không phải TOML hợp lệ` : `${invalidToml[1]} is not valid TOML`;

  const invalidJson = /^(.+) 不是有效 JSON$/.exec(text);
  if (invalidJson) return language === "vi" ? `${invalidJson[1]} không phải JSON hợp lệ` : `${invalidJson[1]} is not valid JSON`;

  const profileAuthJson = /^(.+) 的 auth\.json JSON 解析失败$/.exec(text);
  if (profileAuthJson) return language === "vi" ? `Không parse được auth.json của ${profileAuthJson[1]} dạng JSON` : `Failed to parse ${profileAuthJson[1]}'s auth.json as JSON`;

  const registryWrite = /^写入注册表值 (.+) 失败$/.exec(text);
  if (registryWrite) return language === "vi" ? `Không ghi được giá trị registry ${registryWrite[1]}` : `Failed to write registry value ${registryWrite[1]}`;

  const registryOpen = /^打开注册表键 HKCU\\(.+) 失败$/.exec(text);
  if (registryOpen) return language === "vi" ? `Không mở được khóa registry HKCU\\${registryOpen[1]}` : `Failed to open registry key HKCU\\${registryOpen[1]}`;

  const invalidReleaseAsset = /^非法 Release asset 文件名:\s*(.+)$/.exec(text);
  if (invalidReleaseAsset) return language === "vi" ? `Tên file release asset không hợp lệ: ${invalidReleaseAsset[1]}` : `Invalid release asset file name: ${invalidReleaseAsset[1]}`;

  const backendWrapper = /^后端已修复，命令包装器已指向\s+(.+)。$/.exec(text);
  if (backendWrapper) return language === "vi" ? `Đã sửa backend, wrapper lệnh đã trỏ tới ${backendWrapper[1]}.` : `Backend repaired; command wrapper now points to ${backendWrapper[1]}.`;

  const relayTestOk = /^已向「(.+)」用模型「(.+)」发送 hi，HTTP\s+(.+)。(.+)$/.exec(text);
  if (relayTestOk) return language === "vi" ? `Đã gửi hi tới “${relayTestOk[1]}” bằng model “${relayTestOk[2]}”, HTTP ${relayTestOk[3]}. ${translateText(language, relayTestOk[4])}` : `Sent hi to “${relayTestOk[1]}” with model “${relayTestOk[2]}”, HTTP ${relayTestOk[3]}. ${translateText(language, relayTestOk[4])}`;

  const fetchedModels = /^已从「(.+)」获取\s+(.+)\s+个模型。$/.exec(text);
  if (fetchedModels) return language === "vi" ? `Đã lấy ${fetchedModels[2]} model từ “${fetchedModels[1]}”.` : `Fetched ${fetchedModels[2]} models from “${fetchedModels[1]}”.`;

  const relayTestFailed = /^测试「(.+)」失败：(.+)$/.exec(text);
  if (relayTestFailed) return language === "vi" ? `Kiểm thử “${relayTestFailed[1]}” thất bại: ${relayTestFailed[2]}` : `Test “${relayTestFailed[1]}” failed: ${relayTestFailed[2]}`;

  const fetchModelsFailed = /^从「(.+)」获取模型失败：(.+)$/.exec(text);
  if (fetchModelsFailed) return language === "vi" ? `Không lấy được model từ “${fetchModelsFailed[1]}”: ${fetchModelsFailed[2]}` : `Failed to fetch models from “${fetchModelsFailed[1]}”: ${fetchModelsFailed[2]}`;

  const providerNumber = /^供应商\s+(\d+)$/.exec(text);
  if (providerNumber) return language === "vi" ? `Provider ${providerNumber[1]}` : `Provider ${providerNumber[1]}`;

  const providerCopy = /^(.+)\s+副本$/.exec(text);
  if (providerCopy) return language === "vi" ? `${translateText(language, providerCopy[1])} bản sao` : `${translateText(language, providerCopy[1])} copy`;

  const backgroundTaskFailed = /^(.+)后台任务失败：(.+)$/.exec(text);
  if (backgroundTaskFailed) return language === "vi" ? `Tác vụ nền ${translateText(language, backgroundTaskFailed[1])} thất bại: ${backgroundTaskFailed[2]}` : `${translateText(language, backgroundTaskFailed[1])} background task failed: ${backgroundTaskFailed[2]}`;

  const colonMessage = /^(.+?)：(.+)$/.exec(text);
  if (colonMessage) {
    const translatedPrefix = translatePrefix(language, colonMessage[1]);
    if (translatedPrefix !== colonMessage[1]) return `${translatedPrefix}: ${translateText(language, colonMessage[2])}`;
  }

  const asciiColonMessage = /^(.+?):\s+(.+)$/.exec(text);
  if (asciiColonMessage) {
    const translatedPrefix = translatePrefix(language, asciiColonMessage[1]);
    if (translatedPrefix !== asciiColonMessage[1]) return `${translatedPrefix}: ${translateText(language, asciiColonMessage[2])}`;
  }

  const contextAdd = /^(?:新增|Add|Thêm)\s*(.+)$/.exec(text);
  if (contextAdd && isContextLabel(contextAdd[1])) return contextAddPatternLabel(language, contextAdd[1]);

  const contextSummary = /^当前共有\s+(\d+)\s+个(.+)；这些条目独立于供应商保存，会写入所有供应商切换后的 config\.toml。$/.exec(text);
  if (contextSummary && isContextLabel(contextSummary[2])) return contextSummaryPatternLabel(language, Number(contextSummary[1]), contextSummary[2]);

  const contextEmpty = /^暂无(.+)，可以从通用配置文件或这里新增。$/.exec(text);
  if (contextEmpty && isContextLabel(contextEmpty[1])) return contextEmptyPatternLabel(language, contextEmpty[1]);

  return null;
}

function translatePrefix(language: AppLanguage, prefix: string): string {
  const trimmed = prefix.trim();
  const mapped = translationMaps[language].get(trimmed);
  if (mapped && mapped !== trimmed) return mapped;
  return dynamicPrefixTranslations[language][trimmed] ?? trimmed;
}

function isContextLabel(label: string): boolean {
  return /^(?:MCP|Skills|插件|Plugins|Kỹ năng|Plugin|扩展项|Extension|Tiện ích)$/.test(label.trim());
}

function translateContextLabel(language: AppLanguage, label: string): string {
  const trimmed = label.trim();
  return translationMaps[language].get(trimmed) ?? trimmed;
}

function contextAddPatternLabel(language: AppLanguage, label: string): string {
  const translatedLabel = translateContextLabel(language, label);
  return language === "vi" ? `Thêm ${translatedLabel}` : `Add ${translatedLabel}`;
}

function contextSummaryPatternLabel(language: AppLanguage, count: number, label: string): string {
  const translatedLabel = translateContextLabel(language, label);
  if (language === "vi") {
    return `Hiện có ${count} mục ${translatedLabel}. Các mục này được lưu riêng với provider và sẽ được ghi vào config.toml khi chuyển provider.`;
  }
  const entryWord = count === 1 ? "entry" : "entries";
  return `There ${count === 1 ? "is" : "are"} ${count} ${translatedLabel} ${entryWord}. These entries are saved independently from providers and written into config.toml after any provider switch.`;
}

function contextEmptyPatternLabel(language: AppLanguage, label: string): string {
  const translatedLabel = translateContextLabel(language, label);
  return language === "vi"
    ? `Chưa có mục ${translatedLabel}. Bạn có thể thêm từ file cấu hình chung hoặc tại đây.`
    : `No ${translatedLabel} entries yet. Add one from the common config file or here.`;
}

function translateWholeTextElements(language: AppLanguage, root: ParentNode): void {
  const elements = root instanceof Element ? [root, ...Array.from(root.querySelectorAll("*"))] : Array.from(root.querySelectorAll("*"));
  for (const element of elements) {
    if (shouldSkipElement(element)) continue;
    const childNodes = Array.from(element.childNodes);
    if (!childNodes.length || childNodes.some((node) => node.nodeType !== Node.TEXT_NODE)) continue;
    const value = element.textContent ?? "";
    const next = translateText(language, value);
    if (next !== value) element.textContent = next;
  }
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
