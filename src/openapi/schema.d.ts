/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/sign-up": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * 新規登録
         * @description ユーザーを新規登録する
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["UserProfile"];
                };
            };
            responses: {
                /** @description 登録成功 */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UserId"] & components["schemas"]["UserProfile"];
                    };
                };
                /** @description 登録失敗 */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @description エラーメッセージ */
                            message?: string;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/main": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * メイン画面でのデータ取得
         * @description ユーザのステータスや着せ替えを取得する
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description メイン画面データ取得成功 */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            user?: components["schemas"]["UserId"] & components["schemas"]["UserProfile"] & components["schemas"]["UserStatus"];
                            character?: components["schemas"]["CharacterDialogue"] & components["schemas"]["ImageUrl"];
                        };
                    };
                };
                /** @description 認証エラー */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UnauthorizedError"];
                    };
                };
                /** @description アクセス拒否 */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ForbiddenError"];
                    };
                };
                /** @description リソースが見つかりません */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NotFoundError"];
                    };
                };
                /** @description サーバーエラー */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["InternalServerError"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * クイズ履歴トップ取得
         * @description ユーザのクイズ履歴を取得する
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description クイズ履歴取得成功 */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @description ユーザのステータス */
                            user?: components["schemas"]["UserId"] & components["schemas"]["UserProfile"] & {
                                /** @description ユーザの着せ替え画像 */
                                costume?: components["schemas"]["Images"];
                            };
                            history?: {
                                /** @description ユーザの総正答率 */
                                totalAccuracy?: components["schemas"]["Accuracy"];
                                /** @description 難易度別の一覧 */
                                tierList?: {
                                    /** @description クイズセットの難易度 */
                                    tier?: number;
                                    /** @description クイズセットの正答率 */
                                    accuracy?: components["schemas"]["Accuracy"];
                                    /** @description クイズセットの指名手配猫 */
                                    character?: components["schemas"]["Images"];
                                    /** @description クイズセットの一覧 */
                                    quizSetList?: components["schemas"]["QuizSet"][];
                                }[];
                            };
                        };
                    };
                };
                /** @description 認証エラー */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UnauthorizedError"];
                    };
                };
                /** @description アクセス拒否 */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ForbiddenError"];
                    };
                };
                /** @description リソースが見つかりません */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NotFoundError"];
                    };
                };
                /** @description サーバーエラー */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["InternalServerError"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/history/quiz-set/{quizSetId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * クイズ履歴詳細取得
         * @description ユーザのクイズ履歴の詳細を取得する
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    quizSetId: components["schemas"]["QuizSetId"];
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description クイズ履歴詳細取得成功 */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @description クイズセットの指名手配猫 */
                            character?: components["schemas"]["Images"];
                            quizSet?: components["schemas"]["QuizSet"];
                            /** @description クイズの問題一覧 */
                            quizList?: (components["schemas"]["Quiz"] & components["schemas"]["QuizAnswer"])[];
                        };
                    };
                };
                /** @description リクエストエラー */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BadRequestError"];
                    };
                };
                /** @description 認証エラー */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UnauthorizedError"];
                    };
                };
                /** @description アクセス拒否 */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ForbiddenError"];
                    };
                };
                /** @description リソースが見つかりません */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NotFoundError"];
                    };
                };
                /** @description サーバーエラー */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["InternalServerError"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * ユーザプロフィール取得
         * @description ユーザのプロフィールを取得する
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description プロフィール取得成功 */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            profile?: components["schemas"]["UserId"] & components["schemas"]["UserProfile"];
                            /** @description キャラクター画像の一覧 */
                            costumeList?: (components["schemas"]["Images"] & {
                                /** @description ユーザが所持しているかどうか */
                                isOwn?: boolean;
                                /** @description ユーザが選択しているかどうか */
                                isSelected?: boolean;
                            })[];
                        };
                    };
                };
                /** @description リクエストエラー */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BadRequestError"];
                    };
                };
                /** @description 認証エラー */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UnauthorizedError"];
                    };
                };
                /** @description アクセス拒否 */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ForbiddenError"];
                    };
                };
                /** @description リソースが見つかりません */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NotFoundError"];
                    };
                };
                /** @description サーバーエラー */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["InternalServerError"];
                    };
                };
            };
        };
        /**
         * ユーザプロフィール更新
         * @description ユーザーのプロフィールを更新する
         */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["UserProfile"] & {
                        costumeId?: components["schemas"]["ImageId"]["id"];
                    };
                };
            };
            responses: {
                /** @description プロフィール更新成功 */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UserId"] & components["schemas"]["UserProfile"] & {
                            costume?: components["schemas"]["Images"];
                        };
                    };
                };
                /** @description リクエストエラー */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BadRequestError"];
                    };
                };
                /** @description 認証エラー */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UnauthorizedError"];
                    };
                };
                /** @description アクセス拒否 */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ForbiddenError"];
                    };
                };
                /** @description リソースが見つかりません */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NotFoundError"];
                    };
                };
                /** @description サーバーエラー */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["InternalServerError"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/quiz/{tier}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * クイズの問題取得
         * @description クイズの問題を難易度別で取得する
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description クイズの難易度 */
                    tier: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description クイズ取得成功 */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @description クイズセットの指名手配猫 */
                            character?: components["schemas"]["Images"];
                            /** @description ユーザの着せ替え画像 */
                            costume?: components["schemas"]["Images"];
                            quizSet?: components["schemas"]["QuizSet"] & {
                                /** @description クイズの問題一覧 */
                                quizList?: (components["schemas"]["Quiz"] & {
                                    /** @description クイズのヒント */
                                    hint?: string;
                                })[];
                            };
                        };
                    };
                };
                /** @description リクエストエラー */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BadRequestError"];
                    };
                };
                /** @description 認証エラー */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UnauthorizedError"];
                    };
                };
                /** @description アクセス拒否 */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ForbiddenError"];
                    };
                };
                /** @description リソースが見つかりません */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NotFoundError"];
                    };
                };
                /** @description サーバーエラー */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["InternalServerError"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/quiz/result": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * クイズの解答結果送信
         * @description クイズの解答結果を送信する
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        quizId?: components["schemas"]["QuizId"];
                        /** @description ユーザーの解答 */
                        answer?: string;
                        /** @description クイズを解いた時間(タイムアタックの場合・秒) */
                        answerTime?: number | null;
                    };
                };
            };
            responses: {
                /** @description クイズ解答成功 */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            quizSetId?: components["schemas"]["QuizSetId"];
                            /** @description クイズセットの正答率 */
                            accuracy?: components["schemas"]["Accuracy"];
                            quizList?: (components["schemas"]["Quiz"] & components["schemas"]["QuizAnswer"])[];
                            /** @description ユーザの着せ替え画像 */
                            costume?: components["schemas"]["Images"];
                        };
                    };
                };
                /** @description リクエストエラー */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BadRequestError"];
                    };
                };
                /** @description 認証エラー */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UnauthorizedError"];
                    };
                };
                /** @description アクセス拒否 */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ForbiddenError"];
                    };
                };
                /** @description リソースが見つかりません */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NotFoundError"];
                    };
                };
                /** @description サーバーエラー */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["InternalServerError"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        UserId: {
            /** @description ユーザーID */
            id?: string;
        };
        UserProfile: {
            /** @description ユーザー名 */
            nickname: string;
            /**
             * Format: date
             * @description ユーザーの誕生日(YYYY-MM-DD)
             */
            birthday?: string;
        };
        UserStatus: {
            /** @description ユーザーのレベル */
            level?: number;
            /** @description ユーザーの経験値 */
            experience?: number;
        };
        ImageId: {
            /** @description キャラクター画像のID */
            id?: string;
        };
        ImageName: {
            /** @description キャラクター画像の名前 */
            name?: string;
        };
        ImageUrl: {
            /** @description キャラクター画像のURL */
            url?: string;
        };
        Images: components["schemas"]["ImageId"] & components["schemas"]["ImageName"] & components["schemas"]["ImageUrl"];
        CharacterDialogue: {
            /** @description キャラクターのセリフ */
            dialogue?: string;
        };
        /**
         * Format: double
         * @description クイズセットの正答率
         */
        Accuracy: number;
        /** @description クイズのID */
        QuizId: string;
        /** @description クイズセットのID */
        QuizSetId: string;
        Quiz: {
            id?: components["schemas"]["QuizId"];
            news?: {
                /** @description クイズのニュースのタイトル */
                title?: string;
                /** @description クイズのニュースの内容 */
                content?: string;
                /** @description クイズのニュースの画像 */
                image?: string;
            };
            /** @description クイズの問題文 */
            question?: string;
            /**
             * @description クイズの問題タイプ（マルバツか選択式か）
             * @enum {string}
             */
            type?: "true_or_false" | "multiple_choice";
            /** @description クイズの選択肢 */
            choices?: string[] | null;
            /** @description クイズの正解 */
            correctAnswer?: string;
        };
        QuizAnswer: {
            /** @description クイズを解いた時間(タイムアタックの場合・秒) */
            answerTime?: number | null;
            /** @description クイズの正誤 */
            isCorrect?: boolean;
            /** @description ユーザーの解答内容 */
            userAnswer?: string;
            /** @description クイズの解説 */
            explanation?: string;
        };
        QuizSet: {
            id?: components["schemas"]["QuizSetId"];
            /** @description クイズセットの正答率 */
            accuracy?: components["schemas"]["Accuracy"];
            /**
             * @description クイズの出題形式（バトルかタイムアタックか）
             * @enum {string}
             */
            mode?: "battle" | "time_attack";
            /**
             * Format: date-time
             * @description クイズセットを解いた日時
             */
            answeredAt?: string;
        };
        BadRequestError: {
            /**
             * @description 入力データが不正である場合のエラーメッセージ
             * @example リクエスト内容が無効です。入力データを確認してください。
             */
            message?: string;
        };
        UnauthorizedError: {
            /**
             * @description 認証が必要なエンドポイントに未認証のユーザがアクセスした場合のエラーメッセージ
             * @example 認証に失敗しました。再度ログインしてください。
             */
            message?: string;
        };
        ForbiddenError: {
            /**
             * @description ユーザがアクセス権限のないリソースにアクセスした場合のエラーメッセージ
             * @example アクセスが拒否されました。権限がありません。
             */
            message?: string;
        };
        NotFoundError: {
            /**
             * @description リクエストされたリソースが見つからない場合のエラーメッセージ
             * @example リソースが見つかりません。URLが正しいか確認してください。
             */
            message?: string;
        };
        InternalServerError: {
            /**
             * @description サーバー側で予期せぬエラーが発生した場合のエラーメッセージ
             * @example サーバーエラーが発生しました。しばらくしてから再度お試しください。
             */
            message?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;