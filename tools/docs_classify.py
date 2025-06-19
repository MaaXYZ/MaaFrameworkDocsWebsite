import re
import shutil
from pathlib import Path

RAW_DOCS_PATH = Path(Path.cwd() / "raw" / "docs")
OUTPUTS_PATH = Path(Path.cwd() / "src")
LANGUAGE_LIST = ["zh_cn", "en_us"]
BINDING_LIST = ["NodeJS"]


class DocsOutputPath:
    application = "application"
    binding = "binding"
    framework = "framework"


class DocsNamePattern:
    application = re.compile(r"\b[1-3]\.\d+-.*?\b")
    framework = re.compile(r"\b4\.\d-\S+\b")
    # binding 不使用正则进行匹配


def main():
    if not RAW_DOCS_PATH.exists():
        raise RuntimeError("Please checkout the repo at first.")

    for lang in LANGUAGE_LIST:
        raw_path = RAW_DOCS_PATH / lang
        outputs_path = OUTPUTS_PATH / lang.replace("_", "-")

        for file in raw_path.iterdir():
            if not file.is_file():
                continue

            name = file.name
            if DocsNamePattern.application.match(name):
                shutil.copy2(file, outputs_path / DocsOutputPath.application / name)
            elif DocsNamePattern.framework.match(name):
                shutil.copy2(file, outputs_path / DocsOutputPath.framework / name)

        for binding in BINDING_LIST:
            shutil.copytree(
                raw_path / binding,
                outputs_path / DocsOutputPath.binding / binding,
                dirs_exist_ok=True,
            )


if __name__ == "__main__":
    main()
